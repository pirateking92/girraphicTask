import { Router } from "express";
import { getAthletes } from "../controllers/resultsController";

const router = Router();

router.get("/", getAthletes);

export default router;
