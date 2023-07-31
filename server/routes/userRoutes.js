const { signup, signin } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
