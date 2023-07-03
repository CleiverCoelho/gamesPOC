import { Router } from "express";
import gameController from "../controllers/games-controlles";

const gameRouter = Router();
gameRouter.get("/game", gameController.getGames);


export default gameRouter;