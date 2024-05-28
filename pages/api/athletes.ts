import { readFileSync } from "fs";
import { RaceResults } from "../../types";

export default function handler(_req: any, res: any) {
  const raceData: RaceResults = JSON.parse(
    readFileSync("data/MarathonResults.json", "utf-8")
  );
  res.status(200).json(raceData.results.athletes);
}
