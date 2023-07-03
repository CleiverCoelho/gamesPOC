import express from "express";

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routers/users-router";
import { db } from "./database/database";

const app  = express();
const port = process.env.PORT || 5000;

app.get('/health', async (_req, res) => {
  const result = db.query(`SELECT * FROM users`); 
  res.send((await result).rows)
})

app.use(userRouter);


app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})