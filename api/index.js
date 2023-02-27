import express from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import router from '../inventoryrouter.js'
import cartRouter from '../cartrouter.js'
import cors from 'cors'
const app = express()

// This is a middleware that runs before and after the handler.
app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))

app.use(cors())

// Feel free to use a router and move this elsewhere.
app.use ('/api', router)
app.use('/api/cart', cartRouter)
// Don't use app.listen. Instead export app.
export default app