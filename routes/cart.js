const router = require("express").Router();
const cart = require("../models/Cart");
const { verifyToken } = require("../validation");

// /api/cart
// Create an item into cart
router.post("/", verifyToken ,async (req, res) => {
  data = req.body;
  cart.insertMany(data)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// /api/cart
// Read all cart items
router.get("/", (req, res) => {
  cart.find()
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( {message: err.message}); })
})

// Update cart

// Delete cart

module.exports = router;