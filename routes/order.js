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

// Read specific order item --get
router.get("/:id", (req, res) => {
  order.findById(req.params.id)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); })
})

// Update specific order by id
router.put("/:id", (req, res) => {
  const id = req.params.id; 

  order.findByIdAndUpdate(id, req.body)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot update order with id=" + id + ". Maybe order was not found!"})
    } else {
      res.send( {message: "Order=" + id + " was successfully updated."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error updating order with id=" + id }); }) 
})

// Delete specific order item
router.delete("/:id", (req, res) => {
  const id = req.params.id; 

  order.findByIdAndDelete(id)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot delete order item with id=" + id + ". Maybe order item was not found!"})
    } else {
      res.send( {message: "Order item was successfully deleted."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error deleting order item with id=" + id }); }) 
})


module.exports = router;
