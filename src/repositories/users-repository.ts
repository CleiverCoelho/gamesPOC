import { User, CreateUser } from "protocols";
import { db } from "../database/database";

async function getUsers() {
  const query = `SELECT * FROM users`;
  const result = await db.query<User>(query);

  return result.rows;
}

async function createUser(name: string, age: number) {
  const query = `INSERT INTO users (name, age) VALUES ($1, $2)`;
  const result = await db.query<CreateUser>(query, [name, age]);

  return result;
}

const userRepository = {
  getUsers,
  createUser
}

export default userRepository;