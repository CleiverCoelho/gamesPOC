import { Router } from "express";
import voteController from "../controllers/votes-controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import createVoteSchema from "../schemas/createVoteSchema";

const voteRouter = Router();
voteRouter.get("/vote", voteController.getVotes);
voteRouter.get("/vote/ranking", voteController.getRanking);
voteRouter.post("/vote", validateSchemaMiddleware(createVoteSchema), voteController.createVote);

export default voteRouter;