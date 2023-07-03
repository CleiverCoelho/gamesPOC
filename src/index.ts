import express from "express";
import cors from 'cors';

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routers/users-router";
import { db } from "./database/database";
import gameRouter from "./routers/games-router";
import voteRouter from "./routers/votes-router";


const app  = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// app.get('/vote/ranking', async (_req, res) => {
//   const result = db.query(`SELECT games.title, COUNT(games.id) as "totalVotes" FROM vote
//   JOIN games ON games.id=vote."gameVote"
//   JOIN users ON users.id=vote."userName"
//   GROUP BY games.id
//   ORDER BY "totalVotes" DESC`); 
//   res.send((await result).rows)
// })

app.use(userRouter);
app.use(gameRouter);
app.use(voteRouter);


app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})