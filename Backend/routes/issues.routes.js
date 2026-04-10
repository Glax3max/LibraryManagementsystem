import express from "express";
import { getSettledIssue, getUnsettledIssue, issueHistory, requestIssue, resolveIssue, returnIssue } from "../controller/issueControllers.js";

const issueRoutes= express.Router();

issueRoutes.get("/",getUnsettledIssue);
issueRoutes.get("/issueHistory",issueHistory);
issueRoutes.get("/settledIssue",getSettledIssue);
issueRoutes.post("/raiseIssue",requestIssue);
issueRoutes.patch("/:id/settle",resolveIssue);
issueRoutes.post("/:id/return",returnIssue);
export default issueRoutes;