const {User} = require('../models/index');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require("dotenv").config();

// var token = jwt.sign({email:'admin@relevel.com', password:'admin@admin'}, 'Secreat_key1');
// console.log(token);

// const decoded = jwt.verify(token,'Secreat_key1');
// console.log(decoded);


 const signUp = (data) =>{
     const respon se = User.create({
         email: data.email,
         userName: data.username,
         password: data.password,
         
     });
     return response;
 }

 const getUserByEmail = async (data) => {
    const response = User.findOne({
        where: {
            email: data
        }
    });
    return response;
 };

 const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
 };

 const verifyToken = (token) => {
    try{
    const response = jwt.verify(token, process.env.Secreat_key);
    return response;
} catch(err) {
    console.log(err);
}

 }

 module.exports = {
    signUp,
    getUserByEmail,
    verifyPassword,
    verifyToken
}
