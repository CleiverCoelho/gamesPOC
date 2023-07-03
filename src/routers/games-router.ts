import { Router } from "express";
import gameController from "../controllers/games-controlles";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import updateGameDescriptionSchema from "../schemas/updateGameDescription";

const gameRouter = Router();
gameRouter.get("/game", gameController.getGames);
gameRouter.put("/game", validateSchemaMiddleware(updateGameDescriptionSchema), gameController.updateGameDescription);


export default gameRouter;