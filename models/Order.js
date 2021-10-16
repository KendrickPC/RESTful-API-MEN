const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let orderSchema = new Schema(
  {
    userId: {type: String, required: true},
    productId: {type: String, required: true},
    quantity: {type: Number, default: 1, required: true},
    amount: {type: Number, required: true}
  },
  {timestamps: true}
);

module.exports = mongoose.model("order", orderSchema)