const { signup, signin, setAvatar } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/setAvatar/:id", setAvatar);

module.exports = router;
