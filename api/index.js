import express from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'

const app = express()

const todoSchema = new mongoose.Schema({
  text: String
})

const Todo = mongoose.model('Todo', todoSchema)

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

// Feel free to use a router and move this elsewhere.
app.get('/api', async (req, res) => {
  await Todo.insertMany([{ text: (new Date()).toISOString() }])
  const todos = await Todo.find()

  console.log(process.env.DATABASE_URL)
  res.json({ message: 'Hello World', todos })
})

// Don't use app.listen. Instead export app.
export default app