const port = 4000;
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//MongoDB Database
mongoose.connect(process.env.MONGO_URI);


app.get('/', (req, res)=> {
    res.send("Express App is Running")
})

//IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Upload Request Endpoint for Images - CREATE
app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.status(200).json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for Creating Products
const Product = mongoose.model("Product",{
    id: {
        type: Number,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

// Create new database product on Admin Side - CREATE
app.post('/addproduct', async (req, res) => { 
    
    let products = await Product.find({});
    let id;
    if(products.length > 0) { // This will take one product at a time and increment the ID number 
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1; // This adds an ID number if no ID is passed into the Product model
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save(); // This will save the entry to the database
    console.log("Saved");
    res.status(200).json({
        success: true,
        name: req.body.name,
    })
})

//API route for Deleting Products on Admin Side - DELETE
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.status(200).json({
        success: true,
        name: req.body.name
    })
})

//API route for getting all products - READ
app.get('/allproducts', async (req, res)=> {
    let products = await Product.find({});
    console.log("All Products Fetched")
    res.send(products);
})

// Schema Creation for User 
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


//Endpoint for User Registration - CREATE
app.post('/signup', async (req, res) => { 
    let check = await Users.findOne({email: req.body.email}); // checks to see if a user already exists
    if (check) {
        return res.status(400).json({success: false, error: "Error: Existing user found with same email address."})
    }
    let cart = {}; // If there is no user, initialize new user with an empty cart
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save(); // Saves new user
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.status(200).json({success: true, token}); // Uses json web token to save user registration data
})

// User Login  - CREATE
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email})
    if (user) {
        const passCompare = req.body.password === user.password; // Checks to see if passwords match
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.status(200).json({success: true, token});
        }
        else {
            res.status(400).json({success: false, error: "Password is incorrect."})
        }
    } else {
        res.status(400).json({success: false, error: "Email address is incorrect."})
    }
})

//New Collections Data - READ
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8); // This will add the 8 newest products to the page
    console.log("New Collection Fetched");
    res.send(newcollection);
})

// Fetch Popular Section Data - READ
app.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({category: "women"});
    let popular_in_women = products.slice(0, 4); // Adds 4 products from the array to the page
    console.log("Popular in women Fetched");
    res.send(popular_in_women);
})

//Middleware to Fetch User
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({error: "Please authenticate using a valid token."})
        }
    }


//Endpoint for Adding Products to Cart Data - UPDATE
app.put('/addtocart', fetchUser, async (req, res) => {
    console.log("added item id: ", req.body.itemId);
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
 
})

//Remove Product from Cart Data - DELETE
app.delete('/removefromcart', fetchUser, async (req, res) => {
    console.log("removed item id: ", req.body.itemId);
    let userData = await Users.findOne({_id: req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
   
})

//Endpoint to Get Saved Cart Data - READ
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("GetCart");
    let userData = await Users.findOne({_id: req.user.id})
    res.status(200).json(userData.cartData);
})





app.listen(port,(error)=> {
    if (!error) {
        console.log("Server Running on Port: " + port);
    } else {
        console.log("Error: "+ error)
    }
})