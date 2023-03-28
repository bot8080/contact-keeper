const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, {'collection': 'myCollectionname'});
//If we donot pass collection object then default collection name will be "users"

const User = mongoose.model('user', UserSchema);

module.exports = User;