import express from 'express'
import lifecycle from './middleware/lifecycle.js'

const app = express()

app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    // await mongoose.disconnect()
  }
}))

// Feel free to use a router and move this elsewhere.
app.get('/api', async (req, res) => {
  console.log(process.env.DATABASE_URL)
  res.json({ message: 'Hello World' })
})

// Don't use app.listen. Instead export app.
export default app
