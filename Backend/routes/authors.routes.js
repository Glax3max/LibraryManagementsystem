import express from "express";
import {getAuthors } from "../controller/authorControllers.js";
const authorRoutes = express.Router();

authorRoutes.get("/",getAuthors);
export default authorRoutes;