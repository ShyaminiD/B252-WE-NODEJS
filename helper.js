import { client } from "./index.js";
import { ObjectId } from "mongodb";

async function getMovies(filter) {
  return await client
    .db("b252")
    .collection("movies")
    //.find({})
    .find(filter)
    .toArray();
}
async function updateMoviebyId(id, data) {
  // return await client
  //   .db("b252")
  //   .collection("movies")
  //   .updateOne({ id: id }, { $set: data });
  return await client
    .db("b252")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
async function createMovies(data) {
  return await client.db("b252").collection("movies").insertMany(data);
}
async function createUser(data) {
  return await client.db("b252").collection("users").insertOne(data);
}
async function deleteMoviebyId(id) {
  //return await client.db("b252").collection("movies").deleteOne({ id: id });
  return await client
    .db("b252")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
async function getMoviebyId(id) {
  console.log("*******", id);
  // return await client.db("b252").collection("movies").findOne({ id: id });
  //getting by our id like ex: 101, 102, below is by mongo db id
  return await client
    .db("b252")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

async function getUserByName(username) {
  return await client
    .db("b252")
    .collection("users")
    .findOne({ username: username });
}
export {
  getMovies,
  getMoviebyId,
  createMovies,
  deleteMoviebyId,
  updateMoviebyId,
  createUser,
  getUserByName,
};
