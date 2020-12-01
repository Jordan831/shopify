import axios from 'axios';
module.exports.getCheckout=(req,res)=>{
    try
    {
var ax =req.app.get('ax');
ax.get("/checkouts/1daf36c7c8d94da6523cc5874f6806a1.json").then(function(result){
console.log(result.data);
}).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    }
    catch(err)
    {
        console.log(err);
    }
}