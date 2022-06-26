var mongoose = require('mongoose');
var Q = require('q');
Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
require('dotenv').config();
var options = {
    // useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 5, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser:true
};
const connectionParams={
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.Promise = require('q').Promise;

var cpromise = mongoose.connect(process.env.MONGO_URI,connectionParams, function(error){
    if(error){
        console.error("Database connection failed:"+error);
		process.exit();
    } else {
        
        console.log("Connected to database successfully");
    }
});

// require('./models/CategoryModel');
 require('./models/UserModel');
 require('./models/LogModel');
// require('./models/OrderModel');
// require('./models/ProductModel');
// require('./models/ShoppingCartModel');
//add other models here.
