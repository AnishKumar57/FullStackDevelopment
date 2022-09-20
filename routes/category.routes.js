const categoryController = require('../controller/category.controller');
// const categoryMiddleware = require('../middleware/authentication.validators');
const authenticationMiddleware = require('../middleware/authentication.validators');

const routes = (app) =>{
    // to get all the categories
    app.get('/ecomm/api/v1/categories', categoryController.getCategories);
    
    // to create a new category
    app.post('/ecomm/api/v1/categories', autheticationMiddleware.isAuthernticated, categoryController.createCategory);

    // To get category by id
    app.get('/ecomm/api/v1/categories/:id', categoryController.getCategoriesById);

    // To get category by name using req. body params
    // app.get('/ecomm/api/v1/categories/:name', categoryController.getCategoriesByNameV1);

    // To ge t category by name using req. body params
    app.get('/ecomm/api/v1/categoriesByName/:name', categoryController.getCategoriesByNameV1);

    // To get category by name using query params
    app.get('/ecomm/api/v1/categoryByName1', categoryController.getCategoriesByName);

    // To update the category by given id
    app.put('/ecomm/api/v1/categories/:id', categoryController.updateCategory);

    // To delete data by given id
    app.delete('/ecomm/api/v1/categories/:id', categoryController.deleteItemById);
}

module.exports = routes;