const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { route } = require("./routes/user");

// express init
const app = express();

// express data process
app.use(express.json());
app.use(express.urlencoded({ "extended" : false }));

// environment variable
const PORT = process.env.SERVER_PORT || 5000;

// create route
app.use("api/v1/user", route)

// create server
app.listen(PORT, (res) =>{
    console.log(`server running on port ${PORT}`.bgGreen.black);
});