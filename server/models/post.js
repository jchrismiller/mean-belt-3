var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	
	title: {
		type: String
	},

	description: {
		type: String
	},

	tagged_user: {
		type: String
	},

	date: {
		type: String
	},

	time: {
		type: String
	},

	userid: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],


}, { timestamps: true, usePushEach: true });

module.exports = mongoose.model('Post', PostSchema);

