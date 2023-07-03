import { Router } from "express";
import userController from "../controllers/users-controller";

const userRouter = Router();
userRouter.get("/user", userController.getUsers);


export default userRouter;