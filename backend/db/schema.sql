DROP DATABASE IF EXISTS todo_app;
CREATE DATABASE todo_app;

\c todo_app;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    title VARCHAR, 
    body VARCHAR, 
    complete BOOLEAN DEFAULT FALSE
);


INSERT INTO todos (title, body)
VALUES('walk', 'walk the dog'),
      ('exercise', 'go to the gym');