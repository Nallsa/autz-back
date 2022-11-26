const { Router } = require('express');
const { userController } = require('../controllers/users.controller');

const router = Router();

router.get('/users', userController.getAllUsers);
router.post('/users', userController.registerUser);
router.post('/login', userController.login);
router.delete('/login/:id', userController.del);

module.exports = router;
