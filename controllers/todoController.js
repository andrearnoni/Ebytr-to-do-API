const service = require('../services/todoService');
const messages = require('../helpers/validationMessages');

const getAllTodos = async (_req, res) => {
  try {
    const todos = await service.getAllTodos();

    if (todos === null) {
      return res.status(404)
        .json(messages.WITHOUT_TODOS); 
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await service.getTodoById(id);

    if (todo === null) return res.status(404).json(messages.TODO_NOT_FOUND);

    return res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

const createTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;
    const result = await service.createTodo({ todo, status });

    if (result === false) {
      return res.status(400).json(messages.INVALID_ENTRY); 
    }

    return res.status(201).json({
      todo,
      status,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;
    const { id } = req.params;
    
    await service.updateTodo({ id, todo, status });

    const response = await service.getTodoById(id);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

const excludeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const exclude = await service.excludeTodo(id);

    if (exclude === null) return res.status(404).json(messages.TODO_NOT_FOUND);

    return res.status(200).json(messages.DELETED_TODO);
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  excludeTodo,
};