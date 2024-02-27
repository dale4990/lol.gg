const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required : true
    },
    username: {
        type: String,
        required: true
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;