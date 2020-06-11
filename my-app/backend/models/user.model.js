/**
 * This file includes all the fields for a user.
 * For storing photos directly on mongodb: https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
 * For storing photos directly on database with Multer: https://www.settletom.com/blog/uploading-images-to-mongodb-with-multer
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      maxlength: [20, "User name too long"],
      //minlength: [3, "Fist name too short"]
    },
    firstname: {
      type: String,
      trim: true,
      required: true,
      maxlength: [20, "First name too long"],
      //minlength: [3, "Fist name too short"]
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
      maxlength: [20, "Last name too long"],
      //minlength: [3, "Last name too short"]
    },
    password: {
      type: String,
      required: true,
      //maxlength: [20, "Password too long"],
      //minlength: [6, "Password too short"]
    },
    email: {
      type: String,
      required: true,
      maxlength: [30, "Email exceed the maximum length"],
      //minlength: [6, "Email invalid"]
    },
    phone: {
      type: Number,
      maxlength: [14, "Phone number too long"],
      //minlength: [10, "Phone number invalid"]
    },
    profile: [{
      // for now, photos are stored in database, later can move to AWS S3
      photos: {
        data: Buffer,
        contentType: String,
      },
      bio: {
        type: String,
        maxlength: [140, "Bio exceed the maximum length"]
      },
      location: {
        type: String,
      }
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    points: {
      type: Number,
    }
  },
  { timestamps: true }
);

// virtual fields goes here

// compile and export model from mongoose.Schema
const User = mongoose.model('User', userSchema);
module.exports = User;