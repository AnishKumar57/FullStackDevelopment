const productService = require ('../services/product.service')
 
const getProducts = async(req, res) =>{
    const response = await productService.getAllProducts();
    return res.json({
                message: "successfully fethced the categories",
                success: true,
                code: 200,
                data: response
            });
        }



module.exports = {
    getProducts
}