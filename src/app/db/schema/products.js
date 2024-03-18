const { Schema, default: mongoose } = require("mongoose");

const productsSchemas = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
  },
  gender: String,
  ratings: Number,
  ratingsCount: Number,
  img: String,
  shipping: Number,
});
const Products =
  mongoose.models.products || mongoose.model("products", productsSchemas);

export default Products;
