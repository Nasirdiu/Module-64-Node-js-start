const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello Node personal auto register Mama Start");
});

const users = [
  { id: 1, name: "nasir", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 2, name: "arif", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 3, name: "sumon", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 4, name: "kawser", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 5, name: "Faruk", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 6, name: "sagor", email: "nasir@gmail.com", phone: "01771835448" },
  { id: 7, name: "redu", email: "nasir@gmail.com", phone: "01771835448" },
];
app.get("/user", (req, res) => {
    //filter search name
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to smart port ", port);
});
