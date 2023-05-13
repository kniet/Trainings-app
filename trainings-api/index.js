import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "trainingsapp",
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
      "SELECT id, userimg, title, description, lessons, hours FROM training";
    db.query(sql, (err, result) => {
      if (err) return res.json("Error");
        return res.json(result);
    });
  });

app.listen(8080, () => {
  console.log("Connected to backed!");
});
