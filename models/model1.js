import mongoose from 'mongoose'

const shoppingCart = new mongoose.Schema({
  productName: String,
  companyName: String,
  year: Number,
  refurbished: Boolean,
  color: String,
  price: Number,
  size: String,
  screen: Number,
  stock: Number
})

export default mongoose.model('ShoppingCart', shoppingCart)