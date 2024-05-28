import { readFileSync } from "fs";
import { Athlete } from "../../types";

export default function handler(_req: any, res: any) {
  const athletes: Athlete[] = JSON.parse(
    readFileSync("data/MarathonResults.json", "utf8")
  );
  res.status(200).json(athletes);
}
