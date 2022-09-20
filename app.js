const express = require ("express");
const bodyParser = require("body-parser");
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const {PORT} = require('./config/serverConfig');
const {sequelize} = require("./models/index");
const app = express();


// app.use() function is using the provided middleware for every request incoming to server
// we need to add a bodyparser middleware that will help the express to read the query
app.use(bodyParser.urlencoded({extended:true}));

categoryRoutes(app);
productRoutes(app);
authRoutes(app);

app.listen(PORT, async()=>{
    await sequelize.sync();
    console.log(`server is running at port`, PORT);
})
