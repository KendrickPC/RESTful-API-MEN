const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cartSchema = new Schema(
  {
    userId: {type: String},
    productId: {type: String},
    quantity: {type: Number}
  }
)

module.exports = mongoose.model("cart", cartSchema);
