const productController = require('../controller/product.controller');


const routes = (app) =>{
   app.get('/ecomm/api/v1/products', productController.getProducts);
}

module.exports = routes;