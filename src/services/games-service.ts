import gameRepository from "../repositories/games-repository";

async function getGames() {
  const games = await gameRepository.getGames();
  return games;
}

// sinta-se livre para editar a descricao do jogo, porém
// seu voto pode ser acusado de clubismo e ser excluido
async function updateGameDescription(newDescription: string, gameId: number) {
    const games = await gameRepository.updateGameDescription(newDescription, gameId);
    return games;
  }

const gameService = {
    getGames,
    updateGameDescription
}

export default gameService;