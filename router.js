import express from 'express'
import * as controllers from './controllers.js'
const router = express.Router()

router.get('/', controllers.getShoppingCart)
router.get('/:id', controllers.getShoppingCartItem)
router.post('/', controllers.addProductToShoppingCart)
router.delete('/name/:name', controllers.deleteProductFromShoppingCart)



