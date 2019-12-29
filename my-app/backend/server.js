const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// cors middleware
// be able to parse json
app.use(cors());
app.use(express.json());

// mongoDB Atlas database address
const uri = process.env.ATLAS_URI;
// start db connection.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const signupRouter = require('./routes/user');
app.use('/user', signupRouter);

// starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
