"use strict";
//module.exports = function(http){
//	http.get("/", function(req, res, next){
//		req.url = "/index.html";
//		next();
//	});
//};

var env = process.env.APP_ENV || "production";
var config = require("../config/" + env + ".app.config.js");
module.exports = function(http){
	http.get(config.baseUrl, function(req, res, next){
		req.url = "/index.html";
		next();
	});
};