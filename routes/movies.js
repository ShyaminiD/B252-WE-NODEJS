import express from "express";
const router = express.Router();
import {
  getMovies,
  getMoviebyId,
  createMovies,
  deleteMoviebyId,
  updateMoviebyId,
} from "../helper.js";
import { auth } from "../middleware/auth.js";

//5x + 6x => x(5+6) since get and post have common route "/" we can chain them
router
  .route("/")
  .get(auth, async (request, response) => {
    console.log(request.query);
    //const { language, rating } = request.query;
    let filter = request.query;
    if (filter.rating) {
      filter.rating = +filter.rating;
    }
    //const client = await createConnection();
    const filterMovies = await getMovies(filter);
    //console.log(filterMovies)
    console.log(filter);
    response.send(filterMovies);
  })
  .post(async (request, response) => {
    //console.log(request.params);
    const data = request.body;
    console.log(data);
    //const client = await createConnection();
    //db.collection.InsertMany(data)
    const result = await createMovies(data);
    app.use(express.json());
    response.send(result);
  });

router
  .route("/:id")
  .get(auth, async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    // const client = await createConnection();
    const movie = await getMoviebyId(id);
    const notFound = { message: "No matching movie" };
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send(notFound);
  })
  .delete(auth, async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    //const client = await createConnection();
    const result = await deleteMoviebyId(id);
    const notFound = { message: "No matching movie" };
    console.log(result);
    result ? response.send(movie) : response.status(404).send(notFound);
  })

  .put(auth, async (request, response) => {
    //console.log(request.params);
    const { id } = request.params;
    const data = request.body;
    console.log("data", data);
    // const client = await createConnection();
    //db.collection.InsertMany(data)
    const result = await updateMoviebyId(id, data);

    response.send(result);
  });

export const movierRouter = router;
