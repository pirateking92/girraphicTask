// learnt through nextjs that components are not necessary through it,
// but that its good practice to use them, especially as projects scale.
// It can make projects more organised and readable.

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
      <h2 className="text-2xl font-bold mb-4">Athlete Results</h2>
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
          {athletes && athletes.length > 0 ? (
            athletes.map((athlete) => (
              <AthleteRow key={athlete.rank} athlete={athlete} />
            ))
          ) : (
            <tr>
              <td colSpan={5}>No athlete data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AthleteList;
