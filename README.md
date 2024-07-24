## Capstone-Project

# StyleStation E-Commerce Website

Live (deployed) website here: https://capstone-ecommerce-project.onrender.com

Backend site: https://capstone-ecommerce-project-arq1.onrender.com

StyleStation is a clothing shop that sells products for men, women and kids. I used the MERN (MongoDB, Express, React, NodeJS) Stack to create this full-stack web application. It includes user authentication, and the ability to save your cart contents within your personal account. That way, you can pick up where you left off in your browsing!

StyleStation is a fully-responsive application that can be viewed across the largest to smallest screen sizes. I used CSS and media queries to make the website responsive and accessible. React is used to render the page contents. 

## My Process
Mongoose is used to connect the server to a MongoDB database. The database contents include the items for sale, as well as a collection for user data. I also used the Express package `multer` to be able to upload my own images into a local storage engine and then created URL paths that can be stored into the database. It was my first time using this technology and it's a great way to save images for your project.

I used Fetch to make API calls to obtain data for products, users, and used JSON Web Tokens to allow for user authentication. Each user has their own unique auth-token that is saved to the database.

I used CRUD/ RESTful API methods to create product data, read product data, update cart data, and delete cart data. 

I used Thunder Client Extension in VSCode to test GET, POST, PUT and DELETE request and response routes to ensure they worked as intended.

I also created a separate Admin GUI (Graphical User Interface) where the user can upload their own products to the database (adhering to the Product schema), but for the sake of this project I did not include it in the site deployment because I didn't want anyone to tamper with the database entries. If you view/download this repository you can view this folder titled 'admin'. 


### Technologies used:
- HTML
- CSS
- JavaScript
- React
- Vite
- Express 
- MongoDB
- NodeJS

### Dependencies
In order to run both the frontend and backend successfully, these dependencies must be installed using `npm install`:
* "react"
* "react-dom"
* "react-router-dom"
* "cors"
* "dotenv"
* "express"
* "jsonwebtoken"
* "mongoose"
* "multer"
* "path"

I used Vite to create the React environment. To use Vite you must run the command:
`$ npm create vite@latest`

and then `$ npm run dev` in your chosen directory.


## Overall Reflection
I made a project that meets all of the specified requirements. Although not included in the code, the appropriate index used for my database is '_id' which is already set up by default.  I did not see a need to create a code for this as it felt redundant. I wanted to adhere to DRY coding principles and prevent redundancy.

This was a complex project that used multiple React hooks such as UseRef, UseState, UseContext, useEffect and many JSX Components. I learned a lot about how to write optional chaining in React using the '?.' operator to determine whether the value of an object is truthy or falsy. By using this operator, it helped me to avoid any of my code values returning "undefined" React errors.

I added creative elements and a personal touch to my project through the use of CSS styling. I love using CSS and enjoyed the opportunity to use both grid and flex displays interchangeably. I believe I delivered an engaging experience to the end-user, by giving the opportunity to browse through multiple shop categories as if it were an actual clothing shop.


### Challenges / Blockers
This project was very interesting and I felt challenged at times when dealing with mapping products and applying the appropriate React keys. Eventually I got it figured out, though. The code works as intended.

I would have loved to have more time to write JSX logic for some of the visual elements on the pages. For example, there are some placeholder buttons and text that I would love to make dynamic and/or functional in the future.

