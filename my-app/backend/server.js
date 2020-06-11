/**
 * Good article for Mongoose and Express:
 *   1. https://medium.com/@SigniorGratiano/mongoose-and-express-68994fcfdeff
 *   2. https://rahmanfadhil.com/express-rest-api/
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// dotenv module help config .env file. To learn more, search dotenv npm
dotenv.config();

// create an instance of express() object
const app = express();
const port = process.env.PORT || 5000;

// enable cors (cross origin resources sharing) middleware use
// parse json type from express
app.use(cors());
app.use(express.json());

// mongoDB Atlas database address
const dbUri = process.env.DB0_URI.replace(
  '<password>',
  process.env.DB0_PASSWORD
);

// start db connection.
mongoose.connect(dbUri, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false, 
  useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// add all routes to middleware handling path
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
app.use('/auth', authRouter);
app.use('/user', userRouter);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
