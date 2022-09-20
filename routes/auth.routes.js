const authController = require('../controller/auth.controller');

const routes = (app) => {

    // for signup
    app.post('/ecomm/api/v1/signUp', authController.signUp);

    // for signIn
    app.post('/ecomm/api/v1/singIn', authController.singIn);
}

module.exports =routes;