const pgp = require('pg-promise')({});

const db = pgp("postgress://localhost:5432/todo_app");

module.exports = db; 