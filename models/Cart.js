const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cartSchema = new Schema(
  {
    userId: {type:String, required: true},
    productId: {type:String, required: true},
    quantity: {type:Number, required: true}
  },
  {timestamps: true}
)

module.exports = mongoose.model("cart", cartSchema);
