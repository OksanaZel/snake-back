const Router = require('express');
const router = new Router();
const { controllerWrapper } = require('../middlewares');
const {
  create,
  getAll,
  getById,
  deleteById,
  update,
} = require('../controllers');

router.post('/user', controllerWrapper(create));
router.get('/user', controllerWrapper(getAll));
router.get('/user/:id', controllerWrapper(getById));
router.put('/user/:id', controllerWrapper(update));
router.delete('/user/:id', controllerWrapper(deleteById));

module.exports = router;
