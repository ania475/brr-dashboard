const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let todos = require("./data/todos.json");
let tickets = require("./data/tickets.json");
let nextTicketId = tickets.length
  ? Math.max(...tickets.map((t) => t.id)) + 1
  : 1; //setting the id for the newly added tickets

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

app.delete("/api/tickets/:id", (req, res) => {
  const { id } = req.params;
  const index = tickets.findIndex((ticket) => ticket.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  tickets.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "data/tickets.json"),
    JSON.stringify(tickets, null, 2)
  );

  res.status(200).json({ message: "Ticket deleted" });
});

app.post("/api/tickets", (req, res) => {
  const newTicket = {
    id: nextTicketId++,
    ...req.body,
  };

  tickets.push(newTicket);

  fs.writeFileSync(
    path.join(__dirname, "data/tickets.json"),
    JSON.stringify(tickets, null, 2)
  );

  res.status(201).json(newTicket);
});

app.patch("/api/tickets/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;

  const ticketIndex = tickets.findIndex((t) => t.id === id);
  if (ticketIndex === -1) {
    return res.status(404).json({ error: "Ticket not found" });
  }

  tickets[ticketIndex] = { ...tickets[ticketIndex], ...updates };

  fs.writeFileSync(
    path.join(__dirname, "data/tickets.json"),
    JSON.stringify(tickets, null, 2)
  );

  res.json(tickets[ticketIndex]);
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

app.patch("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;

  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // Update the todo item
  todos[todoIndex] = { ...todos[todoIndex], ...updates };

  // Optionally persist changes to file (if not using a real DB)
  fs.writeFileSync(
    path.join(__dirname, "data/todos.json"),
    JSON.stringify(todos, null, 2)
  );

  res.json(todos[todoIndex]);
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
