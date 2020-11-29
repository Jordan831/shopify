import express from 'express';
import axios from 'axios';
var discountRouter = express.Router();
discountRouter.get("/",function(req,res){

axios({
    method: 'get',
    url: 'https://bgs-app.myshopify.com/admin/api/2020-10/price_rules.json',
    auth: {
      username: 'a1ee8df563789e623b68c2c0427e7e53',
      password: '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'
    },
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(function(result){
    result = JSON.parse(JSON.stringify(result.data)),
    res.send(result);
    console.log(result);
 });


 

    });

export default discountRouter;
    