const moment = require('moment');
const TodosModel = require('../models/todoModel');

const createdAt = moment(new Date()).format('DD/MM/YYYY');

const validateFieldsTodo = (todo, status) => {
  if (!todo || !status) return false;

  return true;
};

const validateStatus = (status) => {
  if (status !== 'Pendente' && status !== 'Em andamento' && status !== 'Pronto') return false;

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
  if (!validateStatus(status)) return null;

  return TodosModel.createTodo({ todo, status, createdAt });
};

const updateTodo = async ({ id, todo, status }) => {
  if (!validateFieldsTodo(todo, status)) return false;
  if (!validateStatus(status)) return null;

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