import { Router } from "express";
import userController from "../controllers/users-controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import createUserSchema from "../schemas/createUserSchema";

const userRouter = Router();
userRouter.get("/user", userController.getUsers);
userRouter.post("/user", validateSchemaMiddleware(createUserSchema), userController.createUser);


export default userRouter;