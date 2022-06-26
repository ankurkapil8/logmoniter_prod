const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id: ObjectId,
    username: String,
    password: String,
    status:{ type: Boolean, default: true },
    created_at:{ type: Date, default: Date.now }
});
const UserModel = mongoose.model('User',schema);
module.exports = UserModel;