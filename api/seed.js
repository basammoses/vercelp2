import mongoose from 'mongoose'
import inventoryData from '../inventory.json' assert { type: 'json' }
import Inventory from '../models/inventory.js'
import * as dotenv from 'dotenv' 
import express from 'express'

dotenv.config()
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()


 async function seed() {
  try {
    await Inventory.deleteMany()
    await Inventory.insertMany(inventoryData)
    console.log('Created inventory items!')
  } catch (error) {
    console.log(error)
    throw error
  }
 }

