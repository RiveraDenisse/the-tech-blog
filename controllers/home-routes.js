const router = require("express").Router();
//this is the homepage we want to render
router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
