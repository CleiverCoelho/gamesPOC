import { Ranking, Vote } from "../protocols/index";
import { db } from "../database/database";
import { createVoteType } from "../protocols/index";

async function getVotes() {
  const query = `
    SELECT * FROM vote
    JOIN games ON games.id=vote."gameVote".id
    JOIN users ON users.id=vote."userName".id`;
  const result = await db.query<Vote>(query);

  return result.rows
}

async function getRanking() {
  const query = `
    SELECT games.title, COUNT(games.id) as "totalVotes" FROM vote
    JOIN games ON games.id=vote."gameVote"
    JOIN users ON users.id=vote."userName"
    GROUP BY games.id
    ORDER BY "totalVotes" DESC
  `;

  const rankingResult = await db.query<Ranking>(query);

  return rankingResult.rows;
}

function createVote(userId: number, gameId: number) {
  return db.query<createVoteType>(`
    INSERT INTO vote ("userName", "gameVote") VALUES ($1, $2)
  `, [userId, gameId]);
}


const voteRepository = {
  getVotes,
  createVote,
  getRanking
}

export default voteRepository;