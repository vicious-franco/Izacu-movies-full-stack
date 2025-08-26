import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    year: Number,
  },
  { timestamps: true }
);

const Movie = mongoose.model("", movieSchema, "movie_list");
export default Movie;
