import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import Router from "./src/routes/router.js";
import { connectDB } from "./src/connectDB/connectDB.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v2/movies", Router);

// routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`server has started on port:${PORT} http://localhost:${PORT}`);
});
