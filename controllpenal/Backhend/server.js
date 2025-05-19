const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "department"
});

con.connect((err) => {
  if (err) {
    console.log("Error connecting to database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/login", (req, res) => {
  const { U_id, password } = req.body;

  if (!U_id || !password) {
    return res.status(400).json({ error: "U_id and Password are required" });
  }

  const query = "SELECT * FROM users WHERE U_id = ? AND password = ?";
  con.query(query, [U_id, password], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(8081, () => {
  console.log("Server running on port 8081");
});


