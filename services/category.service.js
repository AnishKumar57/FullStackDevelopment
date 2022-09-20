const {Category} = require ('../models/index');

const getAllCategories = async() => {
    const allCategoriesData = await Category.findAll();
    return allCategoriesData;   
}

const createNewCategory = async(data) =>{
    const newCategory = await Category.create({
        name: data.name,
        description: data.description
    });
    return newCategory;
};

const getCategoryById = async (idData) => {
    const response = await Category.findAll({
        where: {
            id: idData
        }
    });
    return response;
}

const getCategoryByName = async (nameData) => {
    const response = await Category.findAll({
        where: {
            name: nameData
        }
    });
    return response;
}

const updateCategory = async(id, data) => {
    const response= await Category.update(
        { 
            name: data.name,
            description: data.description,
        },
        {
            where: {
                id: id
    }
  });
  return response;
}

const deleteItemById = async(id) => {
    const response =await Category.destroy({
        where: {
          id: id
        }
      });
      return response;
}

module.exports = {
    getAllCategories,
    createNewCategory,
    getCategoryById,
    getCategoryByName,
    updateCategory,
    deleteItemById
}