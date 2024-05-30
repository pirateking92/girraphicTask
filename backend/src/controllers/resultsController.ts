import { Request, Response } from "express";
import { readFileSync } from "fs";
import { RaceResults } from "../models/types";

export const getResults = (_req: Request, res: Response) => {
  const raceData: RaceResults = JSON.parse(
    readFileSync("data/MarathonResults.json", "utf-8")
  );
  res.status(200).json(raceData.results);
};
