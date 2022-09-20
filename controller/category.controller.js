const categoryService = require ('../services/category.service')

const getCategories =  async(req, res) => {
    const allCategoriesData = await categoryService.getAllCategories();
    return res.json({
        message: "successfully fethced the categories",
        success: true,
        code: 200,
        data: allCategoriesData
    });
}

const createCategory = async(req, res) =>{
    const response = await categoryService.createNewCategory(req.body);
    return res.json ({
        message: "successfully  created new category ",
        success: true,
        code: 201,
        data: response
    });
}

const getCategoriesById = async(req, res) =>{
    const response = await categoryService.getCategoryById(req.params.id);
    return res.json({
        message: "Successfully fetched the categories",
        success: true,
        code: 200,
        data: response
    });
}

const getCategoriesByNameV1 = async(req, res) =>{
    const response = await categoryService.getCategoryByName(req.params.name);
    return res.json({
        message: "Successfully fetched the categories",
        success: true,
        code: 200,
        data: response
    });
}

const getCategoriesByName = async(req, res) =>{
    const response = await categoryService.getCategoryByName(req.query.name);
    return res.json({
        message: "Successfully fetched the categories",
        success: true,
        code: 200,
        data: response
    });
}

const updateCategory = async(req, res) =>{
    const response = await categoryService.updateCategory(req.params.id, req.body);
     return res.json({
        message: "Successfully updated the categories",
        success: true,
        code: 201,
        data: response
    });
}

const deleteItemById = async(req, res) => {
    const response = await categoryService.deleteItemById(req.params.id);
    return res.json({
        message: "Succeccfully deleted the categories",
        success: "true",
        code:  200,
        data: response
        });
}

module.exports = {
    getCategories,
    createCategory,
    getCategoriesById,
    getCategoriesByNameV1,
    getCategoriesByName,
    updateCategory,
    deleteItemById
}