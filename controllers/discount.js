//@ Get All Discount Code
module.exports.getDiscounts=(req,res)=>{
var ax = req.app.get('ax');
ax.get('price_rules.json').then(function(result){
result = JSON.parse(JSON.stringify(result.data));
console.log(result);
res.send(result);
});
}

//@ Create Price Rule

module.exports.createDiscounts=async (req,res)=>{
    try
    {
var ax = req.app.get('ax');
var data;
const result=  await ax.post('price_rules.json',{
"price_rule": {
"title": "hope11",
"target_type": "line_item",
"target_selection": "all",
"allocation_method": "across",
"value_type": "fixed_amount",
"value": "-10.0",
"customer_selection": "all",
"starts_at": "2017-01-19T17:59:10Z"
}
});
data = JSON.parse(JSON.stringify(result.data));
console.log(data.price_rule.id);
var priceid =data.price_rule.id;
var title= data.price_rule.title;
console.log(title);
const discount=  await ax.post("/price_rules/"+priceid+"/discount_codes.json",{
    "discount_code": {
        "code": title
      }
    });
    console.log(discount);
    }
    catch(err)
    {
        console.log(err);
    }

}