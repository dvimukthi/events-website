const express = require("express");
const router = express.Router();
const db = require("../Db/db");

router.post("/", (req, res) => {
  const { firstName, lastName, jobTitle, company, phone, email, website } =
    req.body;

  if (!firstName || !lastName || !company || !phone || !email) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  const sql = `
    INSERT INTO registrations (first_name, last_name, job_title, company, phone, email, website)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [firstName, lastName, jobTitle, company, phone, email, website],
    (err, result) => {
      if (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "User registered successfully" });
    }
  );
});

module.exports = router;
