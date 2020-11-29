import express from 'express';
import dotenv from 'dotenv';
import discountRouter from './routers/discount';
import axios from 'axios';
dotenv.config({path:'./config/config.env'});
const app = express();
const ax = axios.create({
baseURL: 'https://bgs-app.myshopify.com',
auth: {
username: process.env.API_KEY,
password: process.env.API_PASSWORD
},
headers: {'Content-Type': 'application/json'}
});

app.set('ax',ax);
app.use(discountRouter);
app.listen(process.env.PORT);