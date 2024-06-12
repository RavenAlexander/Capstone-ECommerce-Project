import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {


    const [image, setImage] = useState(false);  // Note: Starts as false until an image is uploaded
    const [productDetails, setProductDetails] = useState({
        
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }


    const Add_Product = async () => { // This is what allows us to add a new product and save to our MongoDB database
        console.log(productDetails);

        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                
            },
            body: formData,
        }).then((res) => res.json()).then((data)=> {responseData=data})

        if(responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((res) => res.json()).then((data)=>{
                data.success?alert("Product Added"): alert("Failed")
            });
        }
    }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} name='name' placeholder='Type here' />
      </div>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' />
        </div>
    </div>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Offer (New) Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' />
        </div>
    </div>
    <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name='category' value={productDetails.category} onChange={changeHandler} className='add-product-selector'>
        <option value="">Choose:</option>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kids">Kids</option>
        </select>
    </div>
    <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img'/>
            {/* If image is selected (aka true), it will upload and display from the object url, otherwise it won't upload */}
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
    </div>
    <button onClick={() => {Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
