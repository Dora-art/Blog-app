import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
