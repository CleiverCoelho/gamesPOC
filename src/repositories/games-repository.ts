import { Game } from "protocols";
import { db } from "../database/database";

async function getGames() {
    const query = `SELECT * FROM games`;
    const result = await db.query<Game>(query);
  
    return result.rows;
}

const gameRepository = {
    getGames
}

export default gameRepository;