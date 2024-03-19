// Basic lib
const express = require("express");
const typeorm = require("typeorm");
const router = require("./src/routes/api");
const app = new express();

// Security Middleware lib import
const cors = require("cors");
const dataSource = require("./src/db/db");

// security middleware implement
app.use(cors());

app.use(express.json({ limit: "50mb" }));

// sqlite database connection
dataSource
  .initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// Routing
app.use("/api/v1", router);

// undefined route
app.use("*", (req, res) => {
  res.status(404).json({ status: "faile", data: "Not found" });
});

module.exports = app;
