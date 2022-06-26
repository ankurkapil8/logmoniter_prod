const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id: ObjectId,
    user_id: String,
    data: String,
    log_type: String,
    session_id: String,
    created_at:{ type: Date, default: Date.now }
});
const LogModel = mongoose.model('Log',schema);
module.exports = LogModel;