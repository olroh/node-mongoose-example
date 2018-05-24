const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: String,
    dueDate: Date,
    isCompleted: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);