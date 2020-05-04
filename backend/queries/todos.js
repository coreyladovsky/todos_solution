const db = require("../db/index");

const getAllTodos = async (req, res, next) => {
    try {
        const todos = await db.any("SELECT * FROM todos WHERE author_id = $1", req.user_id);
        res.json({todos})
    } catch (error) {
        next(error)
    }
}

const addTodo = async (req, res, next) => {
    req.body.author_id = req.user_id
    console.log(req.body)
    try {
        const todo = await db.one("INSERT INTO todos (title, body, author_id) VALUES(${title}, ${body}, ${author_id}) RETURNING *", req.body)
        res.json({
            todo, 
            message: "NEW TODO CREATED"
        })
    } catch (err) {
        next(err)
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

module.exports = { getAllTodos, toggleTodo, addTodo };