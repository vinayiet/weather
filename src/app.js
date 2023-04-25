const express = require('express');
const app = express();
const path = require('path');
const port =process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname,"../public");

// adding views to app.js 
app.set('view engine', 'hbs');
app.use(express.static(static_path));


// ADDING ROUTES TO THE OTHER PAGES 
app.get("/",(req,res)=>{
   res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
 })
 app.get("/weather",(req,res)=>{
    res.render("weather")
 })
 app.get("*",(req,res)=>{
    res.render("error")
 })

// HERE WE CALLING THE PORT AT WHICH IT IS SERVED
app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
});