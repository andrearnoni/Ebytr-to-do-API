const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTodos = async () => {
  const db = await connection();

  const todos = await db.collection('todos').find().toArray();

  return todos;
};

const getTodoById = async (id) => {
  const db = await connection();
  const todo = await db.collection('todos').findOne(ObjectId(id));

  if (!todo) return null;

  return todo;
};

const createTodo = async (data) => {
  const db = await connection();
  const todoRegistry = await db.collection('todos')
    .insertOne(data);

  return todoRegistry;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
};