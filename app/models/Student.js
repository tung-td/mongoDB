const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new Schema({
    id: String,
    name: String,
    address: String
});

module.exports = mongoose.model('Student', Student);