import { User } from "protocols";
import { db } from "../database/database";

async function getUsers() {
  const query = `SELECT * FROM users`;
  const result = await db.query<User>(query);

  return result.rows;
}

const userRepository = {
  getUsers
}

export default userRepository;