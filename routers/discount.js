import express from 'express';
var discountRouter = express.Router();
discountRouter.get("/",function(req,res){
var ax = req.app.get('ax');
ax.get('/admin/api/2020-10/price_rules.json').then(function(result){
result = JSON.parse(JSON.stringify(result.data));
console.log(result);
res.send(result);

});




});

export default discountRouter;
