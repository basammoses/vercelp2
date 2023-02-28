
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


  

export const updateInventoryItem = async (req, res) => {
  try {
    const { productName } = req.params 
    let invItem = await Inventory.findOneAndUpdate(productName, req.body)
    if (!invItem) {
      return res.status(404).json({ message: `Product ${productName} not found.` })
    }
    await invItem.save()
    res.status(200).json(invItem)
  } catch (error) {
    res.status(404).json({ message: error.message })
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
    await Inventory.findOneAndDelete({ productName: req.params.productName })
    res.json({ message: 'Product deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const addInventoryItem = async (req, res) => {
  try{const {productName, companyName, year, refurbished, color, price, size, screen, stock, img} = req.body
    const newItem =  Inventory.create({
      productName: productName,
      companyName: companyName,
      year: year,
      refurbished: refurbished,
      color: color,
      price: price,
      size: size,
      screen: screen,
      stock : stock,
      img: img
    })
  
    return res.status(201).json(newItem)
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
