import { client } from "./index.js";

async function getMovies(filter) {
  return await client
    .db("b252")
    .collection("movies")
    //.find({})
    .find(filter)
    .toArray();
}
async function updateMoviebyId(id, data) {
  return await client
    .db("b252")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function createMovies(data) {
  return await client.db("b252").collection("movies").insertMany(data);
}
async function deleteMoviebyId(id) {
  return await client.db("b252").collection("movies").deleteOne({ id: id });
}
async function getMoviebyId(id) {
  return await client.db("b252").collection("movies").findOne({ id: id });
}
export {
  getMovies,
  getMoviebyId,
  createMovies,
  deleteMoviebyId,
  updateMoviebyId,
};
