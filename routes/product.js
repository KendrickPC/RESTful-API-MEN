const router = require("express").Router();
const product = require("../models/Product");
const { verifyToken } = require("../validation");

// CRUD operations

// /api/products/
// Create product - post
router.post("/", verifyToken, (req, res) => {
  data = req.body;

  product.insertMany(data)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// /api/products/
// READ ALL products --get
router.get("/", (req, res) => {
  
  product.find()
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// Read all products in stock - get 
router.get("/instock", (req, res) => {
  product.find({ inStock: true })
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// Read specific product -- get 
router.get("/:id", (req, res) => {
  product.findById(req.params.id)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send( { message: err.message }); }) 
})

// Update specific product -- put
router.put("/:id", (req, res) => {
  const id = req.params.id; 

  product.findByIdAndUpdate(id, req.body)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot update product with id=" + id + ". Maybe product was not found!"})
    } else {
      res.send( {message: "Product was successfully updated."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error updating product with id=" + id }); }) 
})

// Delete specific product -- delete
 // Update specific product -- put
router.delete("/:id", verifyToken, (req, res) => {
  const id = req.params.id; 

  product.findByIdAndDelete(id)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Cannot delete product with id=" + id + ". Maybe product was not found!"})
    } else {
      res.send( {message: "Product was successfully deleted."} )
    }
  })
  .catch(err => { res.status(500).send( { message: "Error deleting product with id=" + id }); }) 
})


module.exports = router;