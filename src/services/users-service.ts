import userRepository from "../repositories/users-repository";

async function getUsers() {
  const users = await userRepository.getUsers();
  return users;
}

async function createUser(name: string, age: number) {
  const users = await userRepository.createUser(name, age);
  return users;
}


const userService = {
  getUsers,
  createUser
}

export default userService;