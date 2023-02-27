import express from 'express'
import * as controllers from './controllers.js'

const cartRouter = express.Router()

//cartRouter.get('/cart', controllers.getShoppingCart)
cartRouter.get('/cart/:id', controllers.getShoppingCartItem)
//cartRouter.post('cart/:id/add', controllers.addProductToShoppingCart)
cartRouter.delete('/cart/:id/delete', controllers.
  deleteProductFromShoppingCart)

cartRouter.get('/cart/:productName', controllers.getProductName)


cartRouter.get('/cart', controllers.getShoppingCart)

cartRouter.delete('/cart/delete', controllers.deleteAll)

export default cartRouter