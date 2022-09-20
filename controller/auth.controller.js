const jwt = require('jsonwebtoken');
require("dotenv").config();
const authService = require('../services/auth.service');

const signUp = async (req, res) => {
    const response = await authService.signUp(req.body);
    return res.json({
        message: 'Successfully signed up',
        success: true,
        code: 200,
        data: response
    });
}

const singIn = async (req, res) => {
    const userData = await authService.getUserByEmail(req.body.email);
    if(!userData) {  // If user id not present
        return res.json({
            message: 'Email id is incorrect, Please try again',
            success: true,
            code: 400,
            data: null
        });
    }else{  // if user is present in database
        const passwordGivenByUser = req.body.password;
        const actualHashedPassword = userData.password;
        const passwordVarified = authService.varifyPassword(passwordGivenByUser, actualHashedPassword);

        if(passwordVarified){ // if password is correct
            var token = jwt.sign({email:userData.email, password:userData.password, userName : userData.userName}, process.env.Secreat_key);
            return res.json({
                message: 'Successfully signed up',
                success: true,
                code: 200,
                data: userData,
                token: token
            });
    }else{ // if password is incorrect
        return res.json({ 
            message: 'Password is incorrect, Please try again',
            success: false,
            code: 400,
            data: null
        });
    }
}
}

module.exports = {
    signUp,
    singIn
}