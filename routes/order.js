const router = require("express").Router();
const order = require("../models/Order");
const { verifyToken } = require("../validation");

// /api/order
// Create an order item
router.post("/", (req, res) => {
  data = req.body;
  order.insertMany(data)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message}); })
})

// /api/order
// Get ALL order items
router.get("/", (req, res) => {
  order.find()
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( {send: err.message}); })
})

module.exports = router;
