import { Router } from "express";
import voteController from "../controllers/votes-controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import createVoteSchema from "../schemas/createVoteSchema";
import deleteVoteSchema from "../schemas/deleteVoteSchema";

const voteRouter = Router();
voteRouter.get("/vote", voteController.getVotes);
voteRouter.get("/vote/ranking", voteController.getRanking);
voteRouter.post("/vote", validateSchemaMiddleware(createVoteSchema), voteController.createVote);
voteRouter.delete("/vote", validateSchemaMiddleware(deleteVoteSchema), voteController.deleteVote);


export default voteRouter;