import userRepository from "../repositories/users-repository";

async function getUsers() {
  const users = await userRepository.getUsers();
  return users;
}


const userService = {
  getUsers
}

export default userService;