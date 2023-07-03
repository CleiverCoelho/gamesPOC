import Joi from "joi";
import { DeleteVote } from "protocols";

const deleteVoteSchema = Joi.object<DeleteVote>({
// length 8 pois "clubismo".length === 8
  reason: Joi.string().length(8).required(),
  voteId: Joi.number().required()
})

export default deleteVoteSchema;