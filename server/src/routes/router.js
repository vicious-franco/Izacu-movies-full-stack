import express from "express";
import {
  addMovie,
  getAllMovies,
  validation,
  updateMovie,
  deleteMovie,
} from "../controllers/controllers.js";

const Router = express.Router();
Router.route("/").post(validation, addMovie).get(getAllMovies);
Router.route("/:id").patch(updateMovie).delete(deleteMovie);

export default Router;
