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

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});