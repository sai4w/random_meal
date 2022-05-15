const express = require("express");
const path = require("path");

const connectDB = require("./db");
const app = express();



const PORT = 5000;

app.set("view engine", "ejs");

connectDB();

app.use(express.json());

app.use("/api/", require("./Run/route"));

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});