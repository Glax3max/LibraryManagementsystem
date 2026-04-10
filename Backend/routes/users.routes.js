import express from "express";
import { createUser, updateUser } from "../controller/userControllers.js";

const userRoutes = express.Router();

userRoutes.post("/register",createUser);
userRoutes.patch("/:id",updateUser)
export default userRoutes;