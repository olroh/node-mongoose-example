const mongoose = require("mongoose");
const TodoModel = require("./todo");

mongoose.connect("mongodb://localhost:27018/todo")
.then(db => {
    for (var i = 0; i < 10; i++) {
        TodoModel.create({
            text: `Lorem ipsum ${i+1}`,
            dueDate: new Date(),
            isCompleted: false
        });
    } 
});