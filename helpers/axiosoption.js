import axios from 'axios';
module.exports= async()=>{ 
    console.log("enter");
    await axios.create({
    baseURL: 'https://bgs-app.myshopify.com',
    auth: {
    username: process.env.API_KEY,
    password: process.env.API_PASSWORD
    },
    headers: {'Content-Type': 'application/json'}
    });
}


