const TodosModel = require('../models/todoModel');

const validateFieldsRecipe = (todo, status) => {
  if (!todo || !status) return false;

  return true;
};

const createTodo = async ({ todo, status }) => {
  const insertDate = new Date().toLocaleString().slice(0, 10).replace(/\//g, '-');

  if (!validateFieldsRecipe(todo, status)) return false;

  return TodosModel.createTodo({ todo, status, insertDate });
};

module.exports = {
  createTodo,
};