//TODO:Require Mongoose down below!
const mongoose = require("mongoose");

const PastGameSchema = require("./pastGameSchema");

const userSchema = new mongoose.Schema(
    {
        /**TODO
         * Define the other six fields down below
         * 
         * Reminder: make sure each field is comma-separated!
         */
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: "",
            required: true,
        },
        streak: {
            type: number,
            default: 0
        },
        past_games: {
            type: [PastGameSchema],
            default: []
        },

        created_at: {
            type: Date,
            default: Date.now
        }
    },
    { _id: true }
);

//Turn your userSchema into a model and export in module.exports!

const User = mongoose.model("User", userSchema, "users");

module.exports = User;