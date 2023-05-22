const express = require ("express");
const cors = require ("cors");
const mysql = require ("mysql");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post("/login", (req, res) => {
  const login = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE login = ? AND password = ?",
    [login, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password!" });
      }
    }
  );
});

app.get("/trainings", (req, res) => {
  const sql =
    "SELECT id, title, description, lessons, hours FROM training";
  db.query(sql, (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

app.post("/addData", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const lessons = req.body.lessons;
  const hours = req.body.hours;
    db.query(
      "INSERT INTO training SET title = ?, lessons = ?, description = ?, hours = ?",
      [title, lessons, description, hours],
      (err, result) => {
        if (err) return res.json({ Message: err });
        return res.json({ Status: "Success" });
      }
    );
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const lessons = req.body.lessons;
    const hours = req.body.hours;
    db.query(
      "UPDATE training SET title = ?, lessons = ?, description = ?, hours = ? WHERE id = ?",
      [title, lessons, description, hours, id],
      (err, result) => {
        if (err) return res.json({ Message: err });
        return res.json({ Status: "Success" });
      }
    );
});

app.delete("/delete/:id", (req, res) => {

  db.query(
    "DELETE FROM training WHERE id = ?",
    [req.params.id], (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json({ Status: "Success" });
  });
});

app.listen(8080, () => {
  console.log("Connected to backed!");
});

module.exports = app;