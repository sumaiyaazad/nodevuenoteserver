
var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

//let host=location.host.split(':')[0]
let ip = require("ip");
let connectionString=process.env.MONGO_URL|| 'mongodb://'+ip.address()+':27017/Notebook';
//mongoose.connect('mongodb://localhost:27017/Keep');
//mongodb+srv://taaha:<password>@cluster0-0zww4.mongodb.net/test?retryWrites=true&w=majority
console.log(connectionString);
console.log(ip.address());
mongoose.connect(connectionString);
//mongoose.connect('mongodb+srv://mt-notebook:mt-notebook@cluster0.0zww4.mongodb.net/Notebook?retryWrites=true&w=majority');
module.exports={mongoose};
