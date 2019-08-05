const express = require('express')
const ProductCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

app.get('/api/product', ProductCtrl.getProducts)
app.get('/api/product/:productId', ProductCtrl.getProduct)
app.post('/api/product', ProductCtrl.saveProduct)
app.put('/api/product/:productId', ProductCtrl.updateProduct)
app.delete('/api/product/:productId', ProductCtrl.deleteProduct)
// app.get('/api/private', )
// // api.post('/signup', userCtrl.)
// api.get('/api/private', auth, (req,res) => {
//     res.status(200).send({ message: 'Tienes acceso '})
// })

module.exports = api