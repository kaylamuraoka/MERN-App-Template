const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  text: {
    type: Strring,
    required: true,
  },
  authorId: { type: String, required: true },
});

module.exports = Log = mongoose.modelNames("log", logSchema);
