const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  prof: {
    type: String,
    reuire: true,
  },
  age: {
    type: Number,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
