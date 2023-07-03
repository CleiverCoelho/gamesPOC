import { Vote } from "../protocols/index";
import { db } from "../database/database";

function getVotes() {
  return db.query<Vote>(`
    SELECT * FROM vote
    JOIN games ON games.id=vote."gameVote".id
    JOIN users ON users.id=vote."userName".id
  `);
}


const voteRepository = {
  getVotes
}

export default voteRepository;