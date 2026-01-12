const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// connexion mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mvp_db",
});

// vérifier la connexion
db.connect((err) => {
  if (err) {
    console.error("Erreur MySQL :", err);
  } else {
    console.log("Connecté à MySQL ✅");
  }
});

// voir les posts
app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// créer un post
app.post("/posts", (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content manquant" });
  }

  db.query(
    "INSERT INTO posts (content) VALUES (?)",
    [content],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(201).json({
        id: result.insertId,
        content,
      });
    }
  );
});

// lancer le serveur
app.listen(3000, () => {
  console.log("Backend lancé sur http://localhost:3000");
});
