import mongoose from 'mongoose'

const shoppingCart = new mongoose.Schema({
  items:
    [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      }
    ],
  
  
  totalPrice: Number,
})

export default mongoose.model('ShoppingCart', shoppingCart);