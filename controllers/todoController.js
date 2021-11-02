const service = require('../services/todoService');
const messages = require('../helpers/validationMessages');

const createTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;
    const result = await service.createTodo({ todo, status });

    if (result === false) {
      return res.status(400).json(messages.INVALID_ENTRY); 
    }

    return res.status(201).json({ info: {
      todo,
      status,
    } });
  } catch (error) {
    console.log(error);
    return res.status(500).json(messages.ERROR);
  }
};

module.exports = {
  createTodo,
};