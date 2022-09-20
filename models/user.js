'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsToMany(models.Role, {through:'User_Roles'});
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true, // to validate the email
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {  // to che ck if the passwordlen b/w 5-50
        len: [5,100]
      }

    },
    userName: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) =>{
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
  })
  return User;
};