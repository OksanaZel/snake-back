const Router = require("express");
const router = new Router();
const UserControllers = require("../controllers/user.controllers");

router.post("/user", UserControllers.createUser);
router.get("/user", UserControllers.getUsers);
router.get("/user/:id", UserControllers.getUserById);
router.put("/user/:id", UserControllers.updateUserScore);
router.delete("/user/:id", UserControllers.deleteUserById);

module.exports = router;
