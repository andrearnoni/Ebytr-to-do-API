// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTodos = async () => {
  const db = await connection();

  const todos = await db.collection('todos').find().toArray();

  return todos;
};

const createTodo = async (data) => {
  const db = await connection();
  const todoRegistry = await db.collection('todos')
    .insertOne(data);

  return todoRegistry;
};

module.exports = {
  getAllTodos,
  createTodo,
};