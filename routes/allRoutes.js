const routes = require("express").Router();
const bodyParser = require('body-parser');

var getallMoves = require('./getAllMoves');


routes.use('/', getallMoves);


module.exports = routes;