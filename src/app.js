const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const todoController = require('../controllers/todoController');

app.post('/todo', todoController.createTodo);

module.exports = app;