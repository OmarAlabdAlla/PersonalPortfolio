const express = require("express");
const { createRouter } = require("./routes");
const { MemStorage } = require("./storage");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize storage
const storage = new MemStorage();

// Setup API routes
app.use(createRouter(storage));

// Serve the original portfolio
app.use(express.static('public'));


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});