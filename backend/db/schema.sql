-- DROP DATABASE IF EXISTS todo_app;
-- CREATE DATABASE todo_app;

-- \c todo_app;

DROP TABLE IF EXISTS todos;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY, 
    email VARCHAR
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    title VARCHAR, 
    body VARCHAR, 
    complete BOOLEAN DEFAULT FALSE, 
    author_id VARCHAR REFERENCES users(id) ON DELETE CASCADE
);
