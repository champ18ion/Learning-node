const express = require('express')
const app = express()
const { products } = require('./data')

 
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="api/products"> products </a>')
})

app.get('/api/products',(req,res) => {
  const newProduct = products.map((product)=>{
    const{id,name,image}=product
    return{id,name,image}
  })
  res.json(newProduct)

})
// app.get('/api/products/1',(req,res) => {
//   const singleProduct = products.find((product)=>product.id===1)
//   res.json(singleProduct)
//   })

// routing method
app.get('/api/products/:productID',(req,res) => {
  console.log(req.params);
  const {productID} = req.params;
  const singleProduct = products.find((product)=>product.id===Number(productID))
   res.json(singleProduct)
  }) 



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})