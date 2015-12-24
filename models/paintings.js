var mongoose = require('mongoose');

// create schema for paintings
var PaintingSchema = new mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}


});

// export paintings schema
module.exports = PaintingSchema