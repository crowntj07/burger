let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");


router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});