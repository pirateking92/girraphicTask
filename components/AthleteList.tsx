// learnt through nextjs that components are not necessary through it,
// but that its good practice to use them, especially as projects scale.
// It can make projects more organised and readable.

import React from "react";
import { Athlete } from "../types";
import AthleteRow from "./AthleteRow";

// set the types based on the types.ts in the root folder
interface AthleteListProps {
  athletes: Athlete[];
  racename: string;
}

const AthleteList: React.FC<AthleteListProps> = ({ athletes, racename }) => {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-serif text-center mb-4 bg-stone-200">
        {racename}
      </h2>
      <table className="min-w-full divide-y divide-gray-300 border border-yellow-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bib Number
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Finish Time
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country Code
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* check that the athletes variable exists and is truthy */}
          {athletes && athletes.length > 0 ? (
            athletes.map((athlete) => (
              <AthleteRow key={athlete.rank} athlete={athlete} />
            ))
          ) : (
            // will throw this line if there is no data available
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
