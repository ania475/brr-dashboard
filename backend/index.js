const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(cors());

//get tickets json

app.get("/api/tickets", (req, res) => {
  const filePath = path.join(__dirname, "data", "tickets.json");
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const staff = JSON.parse(rawData);
    res.json(staff);
  } catch (err) {
    console.error("Failed to read or parse tickets.json:", err);
    res.status(500).json({ error: "Failed to load tickets data" });
  }
});

//get todos json

app.get("/api/todos", (req, res) => {
  const filePath = path.join(__dirname, "data", "todos.json");
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const staff = JSON.parse(rawData);
    res.json(staff);
  } catch (err) {
    console.error("Failed to read or parse todos.json:", err);
    res.status(500).json({ error: "Failed to load todos data" });
  }
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
