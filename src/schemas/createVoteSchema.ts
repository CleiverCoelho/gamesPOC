import Joi from "joi";
import { createVoteType } from "protocols";

const createVoteSchema = Joi.object<createVoteType>({
  userId: Joi.number().required(),
  gameId: Joi.number().required()
})

export default createVoteSchema;