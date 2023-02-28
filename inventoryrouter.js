import express from 'express'
import * as controllers from './controllers.js'
const router = express.Router()

router.get ('/', controllers.getInventory)

router.get('/:productName', controllers.getInventoryItem)

router.post('/add', controllers.addInventoryItem)

router.patch('/updateStock/:productName', controllers.updateStock)

router.patch('/update/:productName', controllers.updateInventoryItem)

router.delete('/:productName/delete', controllers.deleteInventoryItem)

export default router