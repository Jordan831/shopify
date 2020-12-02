
import express from 'express';
//var express =require('express');
//import dotenv from 'dotenv';
// import discountRouter from './routers/discount';
// import checkoutRouter from "./routers/checkout";
// import axios from 'axios';
// dotenv.config({path:'./config/config.env'});
const app = express();
var port = process.env.PORT || 5000;

app.get("/",(req,res)=>{

    res.json("this is new homepage");
});
// const ax = axios.create({
// baseURL:process.env.SHOP,
// auth: {
// username: process.env.API_KEY,
// password: process.env.API_PASSWORD
// },
// headers: {'Content-Type': 'application/json'}
// });

// app.set('ax',ax);
// app.use('/discounts',discountRouter);
// app.use("/checkout",checkoutRouter);
app.listen(port,(req,res)=>{
    console.log("running"+port);
});