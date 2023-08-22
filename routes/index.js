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

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message board" });
});

router.get("/new", (req, res, next) => {
  res.render("new", { title: "New message" });
});

router.get("/messages", (req, res, next) => {
  res.render("messages", { title: "MEssages", messages: messages });
});

router.post("/add-message", (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;

  const x = {
    user: user,
    text: message,
    added: new Date(),
  };

  console.log(x);

  messages.push(x);

  return res.redirect("/messages");
});

module.exports = router;
