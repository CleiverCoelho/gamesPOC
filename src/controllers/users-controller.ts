import httpStatus from "http-status";
import { Request, Response } from "express";
import userService from "../services/users-service";

async function getUsers(req : Request, res: Response)  {

  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

const userController = {
  getUsers
}

export default userController;