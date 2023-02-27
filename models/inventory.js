import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
  productName: String,
  companyName: String,
  year: Number,
  refurbished: Boolean,
  color: String,
  price: Number,
  size: String,
  screen: Number,
  stock: Number,
  img: String
})
    
export default mongoose.model('Inventory', inventorySchema)