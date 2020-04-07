const db = require("../db/index");

const getAllTodos = async (req, res, next) => {
    try {
        const todos = await db.any("SELECT * FROM todos");
        res.json({todos})
    } catch (error) {
        next(error)
    }
}

const toggleTodo = async (req, res, next) => {
    try {
        const todo = await db.one("UPDATE todos SET complete = NOT complete WHERE id = $1 RETURNING *", req.params.id);
        res.json({
            todo,
            message: "Toggled Todo"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllTodos, toggleTodo };