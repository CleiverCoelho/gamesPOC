import gameRepository from "../repositories/games-repository";

async function getGames() {
  const games = await gameRepository.getGames();
  return games;
}

const gameService = {
    getGames
}

export default gameService;