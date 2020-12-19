const mongoose = require("mongoose")


const PostSchema = mongoose.Schema({
	date : {
		date: Date,
		required: true,
	},
	course : {
		type: String,

	}
})
module.exports = mongoose.model("Posts", PostSchema);

