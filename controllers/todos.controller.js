const Todo = require('../models/Todo.model');
const jwt = require('jsonwebtoken');

module.exports.todosController = {
  getAllTodos: async (req, res) => {
    const get = await Todo.find(); //.populate('user');
    res.json(get);
  },

  createTodo: async (req, res) => {
    const { text } = req.body;
    try {
      const todo = await Todo.create({
        user: req.user.id,
        text,
      });
      return res.json(todo);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todo.findById(id);
      

      if (todo.user.toString() === req.user.id) {
        await todo.remove();

        return res.json('Todo del');
      
      }
      return res.json('Это чужой Todo');
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
