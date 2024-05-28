import React from "react";
import { Athlete } from "../types";
import AthleteRow from "./AthleteRow";
import SortOptions from "./SortOptions";

interface AthleteListProps {
  athletes: Athlete[];
  sortByRank: () => void;
  sortByBibNumber: () => void;
}

const AthleteList: React.FC<AthleteListProps> = ({
  athletes,
  sortByRank,
  sortByBibNumber,
}) => {
  return (
    <div>
      <h2>Athlete Results</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Bib Number</th>
            <th>Name</th>
            <th>Finish Time</th>
            <th>Country Code</th>
          </tr>
        </thead>
        <tbody>
          {athletes.map((athlete) => (
            <AthleteRow key={athlete.rank} athlete={athlete} />
          ))}
        </tbody>
      </table>
      <SortOptions sortByRank={sortByRank} sortByBibNumber={sortByBibNumber} />
    </div>
  );
};

export default AthleteList;
