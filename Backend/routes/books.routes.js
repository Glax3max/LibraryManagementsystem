import express from "express";
import { createBook, deleteBookById, getAllBook, getBookById, UpdateBook } from "../controller/bookControllers.js";

const bookRoutes = express.Router();

bookRoutes.post("/",createBook);
bookRoutes.patch("/:id",UpdateBook);
bookRoutes.get("/getBooks",getAllBook);
bookRoutes.get("/getBooks/:id",getBookById);
bookRoutes.delete("/:id",deleteBookById);

export default bookRoutes;