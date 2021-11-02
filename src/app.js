const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const todoController = require('../controllers/todoController');

app.get('/todo/:id', todoController.getTodoById);

app.get('/todos', todoController.getAllTodos);

app.post('/todo', todoController.createTodo);

app.put('/todo/:id', todoController.updateTodo);

app.delete('/todo/:id', todoController.excludeTodo);

module.exports = app;