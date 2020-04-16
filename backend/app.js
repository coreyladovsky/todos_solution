const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3005;
const { getAllTodos, toggleTodo, addTodo } = require("./queries/todos");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/todos", addTodo)

app.get("/todos", getAllTodos)

app.get("/todos/:id", toggleTodo)

app.listen(PORT, () => {
    console.log("listening on port ", PORT)
})

