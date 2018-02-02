var mongoose = require("mongoose"),
	db_name  = "doctor";

mongoose.connect(`mongodb://localhost/${db_name}`);