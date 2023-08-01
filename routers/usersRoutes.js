const { Router } = require("express")
const router = Router()
const { getAllUsers, addUser, removeUser } = require("../controllers/usersControllers")

router.get("/", getAllUsers);
router.post("/add", addUser);
router.delete("/:id", removeUser);

module.exports = router

