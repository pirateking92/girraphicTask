import { Router } from "express";
import { getResults } from "../controllers/resultsController";

const router = Router();

router.get("/", getResults);

export default router;
