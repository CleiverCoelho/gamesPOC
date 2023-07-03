import httpStatus from "http-status";
import { Request, Response } from "express";
import userService from "../services/users-service";
import { CreateUser } from "protocols";

async function getUsers(req : Request, res: Response)  {

  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

async function createUser(req : Request, res: Response)  {

  const {name, age} = req.body as CreateUser

  try {
    const users = await userService.createUser(name, age);
    res.send(users);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

const userController = {
  getUsers,
  createUser
}

export default userController;