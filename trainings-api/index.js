import express from "express";
import cors from "cors";
import mysql from "mysql";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "trainingsapp",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // './public/images/' directory name where save the file
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
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

app.post("/addData", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    const imgsrc = req.file.filename;
    console.log(req.file);
    db.query(
      "INSERT INTO training SET ?",
      {
        title: req.body.title,
        lessons: req.body.lessons,
        description: req.body.description,
        hours: req.body.hours,
        userimg: imgsrc,
      },
      (err, result) => {
        if (err) return res.json({ Message: "Error" });
        return res.json({ Status: "Success" });
      }
    );
  }
});

app.put("/updatte", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const lessons = req.body.lessons;
    const hours = req.body.hours;
    const img = req.file.filename;
    db.query(
      "UPDATE training SET title = ?, lessons = ?, description = ?, hours = ?, userimg = ? WHERE id = ?",
      [title, lessons, description, hours, img, id],
      (err, result) => {
        if (err) return res.json({ Message: "Error" });
        return res.json({ Status: "Success" });
      }
    );
  }
});

app.listen(8080, () => {
  console.log("Connected to backed!");
});
