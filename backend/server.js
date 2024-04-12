import express from 'express'
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
const port= process.env.port; 
connectDB();
console.log(process.env.port)
const app =express()
 
app.get('/',(req,res) =>{
  res.send('Api is running')
})
app.listen(port,() => console.log('Sever running on port '+ port) );

app.get('/api/products', (req,res)=> {
    res.json(products)
})

app.get('/api/products/:id', (req,res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

