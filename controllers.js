import ShoppingCart from './models/model1.js'
import Inventory from './models/inventory.js'
//import inventory from './models/inventory.js'


export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find()
    res.status(200).json(inventory)
  } catch (error) {
    res.status(404).json({ message: error.message })
  
  
  
  }
}

export const getShoppingCartItem = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.findById(req.params.id)
    res.status(200).json(shoppingCart)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getShoppingCart = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.find()
    res.status(200).json(shoppingCart)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// export const addProductToShoppingCart = async (req, res) => {
//   const { product } = req.body
//   const newProduct = new ShoppingCart({ product })
//   try {
//     await newProduct.save()
//     res.status(201).json(newProduct)
//   } catch (error) {
//     res.status(409).json({ message: error.message })
//   }
// }

export const deleteProductFromShoppingCart = async (req, res) => {
  try {
    await ShoppingCart.findByIdAndRemove(req.params.id)
    res.json({ message: 'Product deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getProductName = async (req, res) => { 
  try {
    const product = await Inventory.findOne({ productName: req.params.productName })
    res.status(200).json(product)
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
  
}

export const getInventoryItem = async (req, res) => {
  try {
    const { productName } = req.params
    const item = await Inventory.findOne({ productName })

    if (!item) {
      res.status(404).json({ message: `Product ${productName} not found.` })
    }
    return res.status(200).json(item)
    
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const addInventoryItemtoShoppingCart = async (req, res) => {
  const { productName } = req.body
  const item = await Inventory.findOne({ productName })
  
  if (item) {
    await ShoppingCart.create(item)
    res.status(201).json(item)
  } else {
    res.status(404).json({ message: `Product ${productName} not found.` })
  }
}

export const deleteShoppingCartIem = async (req, res) => {
  try {
    await ShoppingCart.findByIdAndRemove(req.params.id)
    res.json({ message: 'Product deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteAll = async (req, res) => {
  try {
    await ShoppingCart.deleteMany()
    res.json({ message: 'Cart deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateStockinInventory = async (req, res) => {
 
  try {
    const { id } = req.params
    let inventory = await Inventory.findByIdAndUpdate(id, req.body)
    if (!inventory) {
      return res.status(404).json({ message: `Product ${id} not found.` })
    }
    await inventory.save()
    res.status(200).json(inventory)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


  

  
  

export const updateStock = async (req, res) => {
  
  try{
    await Inventory.updateOne({ productName: req.params.productName }, { $inc: { stock: -1 } })
  
    res.status(200).json({ message: 'Stock updated successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }


}

export const deleteInventoryItem = async (req, res) => {
  try {
    await Inventory.findOneAndDelete(req.params.productName)
    res.json({ message: 'Product deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const totalPrice = async (req, res) => {
  const cart = await ShoppingCart.find()

  let totalPrice = 0
  
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price
  }

}
