import Movie from "../models/Schema.js";

export const validation = (req, res, next) => {
  const { name, url, year } = req.body;
  if ((!name, !url, !year)) {
    return res.status(400).json({ message: "please fill all requires fields" });
  }
  req.movie = req.body;
  next();
};

export const addMovie = async (req, res) => {
  const newMovie = new Movie(req.movie);

  try {
    const movie = await newMovie.save();
    if (!movie) {
      return res.status(404).json({ message: "failed to create a movie" });
    }
    res.status(201).json({
      status: "success",
      data: movie,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    console.log(err.message);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    if (!movies || movies.length < 0) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json({ status: "success", data: movies });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) {
      return res.status(404).json({ message: "movie not found" });
    }
    return res.status(200).json({ status: "Sucess", data: movie });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Movie.findByIdAndDelete(id);
    if (!deleteMovie) {
      return res.status(404).json({ message: "delete failed" });
    }
    return res.status(204).send();
  } catch (err) {
    console.log(err.message);
  }
};
