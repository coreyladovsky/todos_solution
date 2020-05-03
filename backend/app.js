const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3005;
const { getAllTodos, toggleTodo, addTodo } = require("./queries/todos");
const { checkFirebaseToken } = require('./middleware/auth');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.post("/todos", addTodo)

app.post("/todos", checkFirebaseToken, getAllTodos)

app.get("/todos/:id", toggleTodo)

app.use((err, req, res, next) => {
    console.log(err)
    if(err.status) {
        res.status(err.status).json(err);
    } else {
        res.status(500).json(err)
    }
});

app.listen(PORT, () => {
    console.log("listening on port ", PORT)
})

