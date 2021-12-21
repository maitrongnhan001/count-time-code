const express = require('express');

const userController = require('../controllers/user_controller');

const router = express.Router();

router.get('/get_user'. userController.getUserController);

router.get('/rank_users', userController.getRankUsers);

router.post('/create_user', userController.createUserController);

router.post('/update_user', userController.updateUserController);


module.exports = router;