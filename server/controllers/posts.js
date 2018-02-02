var session  = require('express-session');
var mongoose = require('mongoose');
var Answer   = require('../models/answer');
var Post 	 = require('../models/post');
var ObjectId = require('mongodb').ObjectId

module.exports = {
	index: (req, res) => {
		Post.find({})
		.populate('_user')
		.exec((err, posts) => {
			if(err)
			{
				return res.json(err);
			}

			return res.json(posts);
		});
	},
	create: (req, res) => {
		let post = new Post(req.body);
		post._user = session.user_id;
		console.log("test" + post);

		post.save( (err) => {
			console.log("TEST SAVE" + post);
			if (err) {
				return res.json(err);
			}

			return res.json(post);
		});
	},
	show: (req, res) => {
		// Need to populate answers
		Post.findOne({_id: req.params.id})
			.populate('answers')
			.exec( (err, post) => {
				if(err)
				{
					return res.json(err);
				}
			return res.json(post);
		});
	},
	update: (req, res) => {

		Post.findOne({_id: req.params.id},
			(err, post) => {
				if (err)
				{
					return res.json(err);
				}

				return res.json(post)
		});
	},

	delete: (req, res) => {

		Post.remove({_id: req.params.id})
		.exec( (err, post) => {
			if (err) {
				console.log(err);
			}
			return res.json(post);
		});
	}
}