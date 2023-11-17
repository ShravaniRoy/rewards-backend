const express = require('express');
//env package lets us fetch port number from environment variables.
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

//adding a middleware
app.use('/api/children', require('./routes/childrenRoutes'));

app.listen(port, ()=> {
    console.log("server port", port);
});