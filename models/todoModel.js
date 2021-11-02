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

const updateTodo = async ({ id, todo, status }) => {
  const db = await connection();

  if (!ObjectId.isValid(id)) return null;

  const result = await db.collection('todos')
    .updateOne({ _id: ObjectId(id) }, { $set: { todo, status } });

  return result;
};

const excludeTodo = async (id) => {
  const db = await connection();
  const response = await getTodoById(id);
  
  if (!response) return null;

  await db.collection('todos').deleteOne({ _id: ObjectId(id) });

  return response;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  excludeTodo,
};