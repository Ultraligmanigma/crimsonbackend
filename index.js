require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());  // erlaubt Frontend Zugriff
app.use(express.json());

const PORT = process.env.PORT || 3000;
const SECRET = process.env.CRIMSON_SECRET || "geheim";

// Test Route
app.get("/", (req, res) => {
    res.send("Crimson Backend läuft!");
});

// API Status Route
app.get("/api/status", (req, res) => {
    res.json({ status: "Backend online", secret: SECRET });
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
