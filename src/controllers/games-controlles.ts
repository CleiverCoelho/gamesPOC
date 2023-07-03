import httpStatus from "http-status";
import { Request, Response } from "express";
import gameService from "../services/games-service";
import { UpdateGameDescription } from "protocols";

async function getGames(req : Request, res: Response)  {

  try {
    const games = await gameService.getGames();
    res.send(games);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

async function updateGameDescription(req : Request, res: Response)  {
    const {newDescription, gameId} = req.body as UpdateGameDescription
    try {
      const games = await gameService.updateGameDescription(newDescription, gameId);
      res.send(games.command);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

const gameController = {
    getGames,
    updateGameDescription
}

export default gameController;