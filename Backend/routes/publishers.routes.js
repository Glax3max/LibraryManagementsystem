import express from "express";
import { getPublisher } from "../controller/publisherControllers.js";

const publishRoutes = express.Router();
publishRoutes.get("/",getPublisher)

export default publishRoutes;