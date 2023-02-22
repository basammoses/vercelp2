import ShoppingCart from './models/model1'

export const getShoppingCart = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.findById(req.params.id)
    res.status(200).json(shoppingCart)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const addProductToShoppingCart = async (req, res) => {
  const { product } = req.body
  const newProduct = new ShoppingCart({ product })
  try {
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deleteProductFromShoppingCart = async (req, res) => {
  try {
    await ShoppingCart.findByIdAndRemove(req.params.id)
    res.json({ message: 'Product deleted successfully.' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

