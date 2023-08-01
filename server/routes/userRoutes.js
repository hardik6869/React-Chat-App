const {
  signup,
  signin,
  setAvatar,
  getAllUsers,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
