const ensureAuthenticated = require("../middlewares/authValidation");

const router = require("express").Router();

// Login Route
//router.get("/", (req, res) => {
//  console.log("--logged in user", req.user);
//  res.status(200).json([
//    {
//      name: "Phone",
//      price: 20000,
//    },
//    {
//      name: "tv",
//      price: 30000,
//    },
//  ]);
//});
//
//module.exports = router;
