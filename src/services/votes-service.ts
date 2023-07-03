import voteRepository from "../repositories/votes-repository";

async function getVotes() {
  const votes = await voteRepository.getVotes();
  return votes;
}

async function getRanking() {
  const ranking = await voteRepository.getRanking();
  return ranking;
}

async function createVote(userId:number, gameId:number) {
  const result = await voteRepository.createVote(userId, gameId);
  return result;
}


const voteService = {
  getVotes,
  getRanking,
  createVote
}

export default voteService;