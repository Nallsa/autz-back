const { Router } = require('express');
const { todosController } = require('../controllers/todos.controller');
const autzMiddleware = require('../models/middlewares/autz.middleware');

const router = Router();

router.get('/todos', autzMiddleware, todosController.getAllTodos);
router.post('/todos', autzMiddleware, todosController.createTodo);
router.delete('/todos/:id', autzMiddleware, todosController.deleteTodo);

module.exports = router;
