const TodosModel = require('../models/todoModel');

const createdAt = new Date().toLocaleString().slice(0, 10).replace(/\//g, '-');

const validateFieldsTodo = (todo, status) => {
  if (!todo || !status) return false;

  return true;
};

const getAllTodos = async () => {
  const todos = await TodosModel.getAllTodos();

  if (todos.length === 0) return null;

  return todos;
};

const getTodoById = async (id) => {
  const todo = await TodosModel.getTodoById(id);

  if (!todo) return null;

  return todo;
};

const createTodo = async ({ todo, status }) => {
  if (!validateFieldsTodo(todo, status)) return false;

  return TodosModel.createTodo({ todo, status, createdAt });
};

const updateTodo = async ({ id, todo, status }) => {
  if (!validateFieldsTodo(todo, status)) return false;

  return TodosModel.updateTodo({ id, todo, status });
};

const excludeTodo = async (id) => {
  const exclude = await TodosModel.excludeTodo(id);

  if (!exclude) return null;

  return exclude;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  excludeTodo,
};