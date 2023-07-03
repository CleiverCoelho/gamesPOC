import Joi from "joi";
import { UpdateGameDescription } from "protocols";

const updateGameDescriptionSchema = Joi.object<UpdateGameDescription>({
  newDescription: Joi.string().required(),
  gameId: Joi.number().required()
})

export default updateGameDescriptionSchema;