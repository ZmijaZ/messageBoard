var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.render("messages", { title: "MEssages" });
});

router.get("/board", (req, res, next) => {
  res.render("board", { title: "Messages board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("new", { title: "New message" });
});

router.post("/add-message", (req, res, next) => {
  const user = req.body.user;
  const message = req.body.text;

  const x = {
    user: user,
    text: message,
    added: new Date(),
  };

  console.log(message);

  messages.push(x);

  return res.redirect("/messages");
});

module.exports = router;
