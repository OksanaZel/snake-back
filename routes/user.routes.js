const Router = require('express');
const router = new Router();
const { controllerWrapper } = require('../middlewares');
const {
  createUser,
  getUsers,
  getUserById,
  updateUserScore,
  deleteUserById,
} = require('../controllers');

router.post('/user', controllerWrapper(createUser));
router.get('/user', controllerWrapper(getUsers));
router.get('/user/:id', controllerWrapper(getUserById));
router.put('/user/:id', controllerWrapper(updateUserScore));
router.delete('/user/:id', controllerWrapper(deleteUserById));

module.exports = router;
