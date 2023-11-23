const express = require('express');
//env package lets us fetch port number from environment variables.
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");


const app = express();

const port = process.env.PORT || 5000;

//adding a middleware for parsing the request body
app.use(express.json());

//adding a middleware
app.use('/api/children', require('./routes/childrenRoutes'));


//adding a error handler middleware
app.use(errorHandler);

app.listen(port, ()=> {
    console.log("server port", port);
});