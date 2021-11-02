const TodosModel = require('../models/todoModel');

const insertDate = new Date().toLocaleString().slice(0, 10).replace(/\//g, '-');

const validateFieldsRecipe = (todo, status) => {
  if (!todo || !status) return false;

  return true;
};

const getAllTodos = async () => {
  const todos = await TodosModel.getAllTodos();

  return todos;
};

const getTodoById = async (id) => {
  const todo = await TodosModel.getTodoById(id);

  if (!todo) return null;

  return todo;
};

const createTodo = async ({ todo, status }) => {
  if (!validateFieldsRecipe(todo, status)) return false;

  return TodosModel.createTodo({ todo, status, insertDate });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
};