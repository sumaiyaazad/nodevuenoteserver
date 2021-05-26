
var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/Keep');
//mongodb+srv://taaha:<password>@cluster0-0zww4.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URL);
//mongoose.connect('mongodb+srv://mt-notebook:mt-notebook@cluster0.0zww4.mongodb.net/Notebook?retryWrites=true&w=majority');
module.exports={mongoose};
