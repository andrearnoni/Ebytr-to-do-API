// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTodo = async (data) => {
  const db = await connection();
  const todoRegistry = await db.collection('todos')
    .insertOne(data);

  return todoRegistry;
};

module.exports = {
  createTodo,
};