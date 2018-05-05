// root of the project

// create new express app
// configure public directory
// app listen to start server

const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var express = require('express');
var app = express();


app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});

module.exports = {
    app: app
}