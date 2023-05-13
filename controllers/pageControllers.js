const {} = require("fs");

/**
 * @desc get all user
 * @method GET /api/v1/user
 * @access public
 */
const showAllUsers = (req,res)=>{
    res.send("Success")
};


// export module
module.exports = {
    showAllUsers
}