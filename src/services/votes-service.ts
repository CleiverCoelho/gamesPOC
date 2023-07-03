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

async function deleteVote(reason: string, voteId: number) {
  // Regra de negócio: unica justificativa para excluir um voto
  // é clubismo (literalmente), em getVotes voce consegue as informacoes do id do voto
  // e quem votou para alegar se foi clubismo ou não
  // use esses poderes com responsabilidade
  if((reason).toLowerCase() !== "clubismo") return {error: true}
  const result = await voteRepository.deleteVote(voteId);
  return result;
}


const voteService = {
  getVotes,
  getRanking,
  createVote,
  deleteVote
}

export default voteService;