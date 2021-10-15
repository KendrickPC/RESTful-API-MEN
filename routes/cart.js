const router = require("express").Router();
const cart = require("../models/Cart");
const { verifyToken } = require("../validation");

// /api/cart
// Create an item into cart
router.post("/", (req, res) => {
  data = req.body;
  cart.insertMany(data)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// /api/cart
// GET ALL cart items
router.get("/", (req, res) => {
  cart.find()
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( {message: err.message}); })
})

// Read specific cart item -- get 
router.get("/:id", (req, res) => {
  cart.findById(req.params.id)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// Update cart
router.put("/:id", (req, res) => {
  const id = req.params.id; 

  cart.findByIdAndUpdate(id, req.body)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot update product with id=" + id + ". Maybe product was not found!"})
    } else {
      res.send( {message: "Product was successfully updated."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error updating product with id=" + id }); }) 
})

// Delete specific cart item
router.delete("/:id", (req, res) => {
  const id = req.params.id; 

  cart.findByIdAndDelete(id)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot delete cart item with id=" + id + ". Maybe cart item was not found!"})
    } else {
      res.send( {message: "Cart item was successfully deleted."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error deleting cart item with id=" + id }); }) 
})

module.exports = router;

