import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();
//process.env;

//const express = require("express"); //importing the package express
import { MongoClient } from "mongodb";
import { movierRouter } from "./routes/movies.js";
const app = express(); //create app by calling express
//const PORT = 9000;
const PORT = process.env.PORT || 9000;
//Heroku will auto assign the port
const MONGO_URL = process.env.MONGO_URL;
console.log(process.env);

//const MONGO_URL = "mongodb+srv://shyaminid:12345@cluster0.3fpc9.mongodb.net"
//mongodb+srv://shyaminid:<password>@cluster0.3fpc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", function (req, res) {
  res.send("Hellooooooooos *************");
});

//app.listen(PORT, () => console.log("App started on port 9000"));

//get method, root path'/', second argument-call back function(req,response as arguments)

app.use(express.json());
app.use(cors());

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  console.log("MongoDB connected!!!!");
  //db.movies.findOne({id:"103"})
  // const movie = await client
  //     .db("b252")
  //     .collection("movies")
  //     .findOne({ id: "103" })
  //console.log(movie);

  return client;
}
export const client = await createConnection();
//createConnection();
// app.get("/movies", function (req, res) {

//   res.send(movies);
// });

//to get of particular languageeg:http://localhost:9000/movies?language=telugu
// app.get("/movies", function (req, res) {
//     console.log(req.query);
//     const { language, rating } = req.query;
//     let filterMovies = movies;
//     if (language) {
//         filterMovies = (filterMovies.filter((mv) => mv.language === language));
//     }
//     if (rating) {
//         filterMovies = (filterMovies.filter((mv) => mv.rating === +rating));
//     }
//     res.send(filterMovies);

// });

//for all the movies//

// if (language) {
//     res.send(movies.filter((mv) => mv.language === language));
// }
// else {
//     res.send(movies);
// }

// Task// /movies - allmovies
// ?language - filtered by language
// ?language&rating - filtered by language & then by rating
// ?rating - filtered by rating
// Install postman
//sending all movies data

//-http://localhost:9000/movies

//to get particular movie -/movies/:id

//app.get("/movies/:id", function (request, response) {
//   app.get("/movies/:id", async (request, response) => {
// console.log(request.params);
//   const { id } = request.params;
//  const client = await createConnection();
// // to get particular id movie details
// //const movie = movies.filter((mv) => mv.id == id);
// //const movie = movies.filter((mv) => mv.id == id)[0];
// //filter will always return an array
// // we can also use find
// //const movie = movies.find((mv) => mv.id == id);
//      const movie = await client.db("b252")
//      .collection("movies")
//      .findOne({ id: id });
// const notFound = { message: "No matching movie" };
// console.log(movie);
// movie ? response.send(movie) : response.status(404).send(notFound);
// //response.send(`movie details ${id}`);
//   });

// crud-Read

//crud-Add

//for delete FIND and DELETE it

//task add delete id ->103
//edit with PUT {name:"BAahubali", rating: 9}
//Crud-delete

// for put we have to give date{rating:9} in body raw json of postman

//-Crud-Update
app.use("/movies", movierRouter);
app.listen(PORT, () => console.log("App started on port 9000"));
