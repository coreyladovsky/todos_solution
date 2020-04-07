const express = require('express');
const app = express();
const PORT = 3005;

const { getAllTodos, toggleTodo } = require("./queries/todos");

app.get("/todos", getAllTodos)

app.get("/todos/:id", toggleTodo)

app.listen(PORT, () => {
    console.log("listening on port ", PORT)
})

