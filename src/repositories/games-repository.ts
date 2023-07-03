import { Game, UpdateGameDescription } from "protocols";
import { db } from "../database/database";

async function getGames() {
    const query = `SELECT * FROM games`;
    const result = await db.query<Game>(query);
  
    return result.rows;
}

async function updateGameDescription(newDescription: string, gameId: number) {

    return db.query<UpdateGameDescription>(`
        UPDATE games set description=$1 WHERE id=$2`
    ,[newDescription, gameId]);
  
}

const gameRepository = {
    getGames,
    updateGameDescription
}

export default gameRepository;