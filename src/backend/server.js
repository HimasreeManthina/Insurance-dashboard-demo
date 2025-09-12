// Simple Express.js demo API
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/claims", (req, res) => {
  res.json([{ id: 1, status: "approved" }, { id: 2, status: "pending" }]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
