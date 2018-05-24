const path = require("path");
const TodoModel = require("../models/todo");

module.exports = {
    async getHomePage (req, res, next) {
        try {
            let todos = await TodoModel.find({});
            let model = {
                message: "Привет от модели",
                todos
            };
            res.render("home", { model });
            //res.sendFile(path.resolve(__dirname, "../views/home.html"));
        } catch(err) {
            next(err);
        }
    }
}