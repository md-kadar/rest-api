const express = require("express");
const { showAllUsers } = require("../controllers/pageControllers");

// Router init
const route = express.Router();

// user routes
route.get("/", showAllUsers)


// export module
module.exports = route