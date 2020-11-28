import express from 'express';
import axios from 'axios';
var discountRouter = express.Router();
discountRouter.get("/",function(req,res){
 axios.get('https://bgs-app.myshopify.com/admin/api/2020-10/price_rules.json',{
headers:{'content-type': 'application/x-www-form-urlencoded'},    
 auth:{
        username:'a1ee8df563789e623b68c2c0427e7e53',
        password:'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'
     }
 }).then(function(result){
    res.send(result);
    console.log(result);
 })

 

    });

export default discountRouter;
    