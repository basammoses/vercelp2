import express from 'express'
import * as controllers from './controllers.js'
const router = express.Router()

router.get ('/', controllers.getInventory)

router.get('/:productName', controllers.getInventoryItem)

router.post('/:productName/add', controllers.addInventoryItemtoShoppingCart)

// router.post('/cart/:productName/add', controllers.addInventoryItemtoShoppingCart)
router.patch('/:productName/update', controllers.updateStock)

router.delete('/:productName/delete', controllers.deleteInventoryItem)

export default router