import gameRepository from "../repositories/games-repository";

async function getGames() {
  const games = await gameRepository.getGames();
  return games;
}

async function updateGameDescription(newDescription: string, gameId: number) {
    const games = await gameRepository.updateGameDescription(newDescription, gameId);
    return games;
  }

const gameService = {
    getGames,
    updateGameDescription
}

export default gameService;