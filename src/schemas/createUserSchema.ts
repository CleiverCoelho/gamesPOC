import Joi from "joi";
import { CreateUser } from "protocols";

const createUserSchema = Joi.object<CreateUser>({
  name: Joi.string().required(),
  age: Joi.number().required()
})

export default createUserSchema;