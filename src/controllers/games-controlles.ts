import httpStatus from "http-status";
import { Request, Response } from "express";
import gameService from "../services/games-service";

async function getGames(req : Request, res: Response)  {

  try {
    const games = await gameService.getGames();
    res.send(games);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

const gameController = {
    getGames
}

export default gameController;