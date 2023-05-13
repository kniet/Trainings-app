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

  app.listen(8080, () => {
    console.log("Connected to backed!");
  });
  