import httpStatus from "http-status";
import { Request, Response } from "express";
import voteService from "../services/votes-service";
import { DeleteVote, createVoteType } from "protocols";

async function getVotes(req : Request, res: Response)  {

  try {
    const votes = await voteService.getVotes();
    res.send(votes);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

async function getRanking(req : Request, res: Response)  {

    try {
        const ranking = await voteService.getRanking();
        res.status(httpStatus.OK).send(ranking);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

async function createVote(req : Request, res: Response)  {
    const {userId, gameId} = req.body as createVoteType
    try {
        await voteService.createVote(userId, gameId);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

async function deleteVote(req : Request, res: Response)  {
    const {reason, voteId} = req.body as DeleteVote
    // os votos são publicos, la voce pode ver o id e quem votou
    try {
        await voteService.deleteVote(reason, voteId);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

const voteController = {
    getVotes,
    getRanking,
    createVote,
    deleteVote
}

export default voteController;