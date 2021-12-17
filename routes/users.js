import express, { response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByName } from "../helper.js";

const router = express.Router();

//5x + 6x => x(5+6) since get and post have common route "/" we can chain them
router.route("/signup").post(async (request, response) => {
  //const data = request.body;
  const { username, password } = request.body;
  //console.log(data);

  //const result = await createMovies(data);
  const { salt, hashedPassword } = await generatePassword(password);
  console.log(salt, hashedPassword);
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);
  //if user already exists then send a error message

  if (isUserExist) {
    response.status(400).send({ message: "User already exists" });
    return;
  }
  if (password.length < 8) {
    response.send({ message: "Provide a longer password" });
    return;
  }
  if (
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)
  ) {
    response.status(400).send({ message: " password pattern does not match" });
    return;
  }
  const result = await createUser({ username, password: hashedPassword });
  response.send(result);
  //response.send(data);
  //response.send({ username, password: hashedPassword});
});

router.route("/login").post(async (request, response) => {
  const { username, password } = request.body;
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
//check for username
  if (!userFromDB) {
    response.send({ message: "Invalid credentials" });
    return;
  }
//check for password
const storedPassword = userFromDB.password;
const isPasswordMatch = await bcrypt.compare(password, storedPassword);

  if (isPasswordMatch) {
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
  response.send({message: "Sucessfull login", token: token})
} else {
  response.send({message: "Invalid credentials" })
}
});
export const usersRouter = router;
async function generatePassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
}
