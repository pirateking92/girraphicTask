import React from "react";
import { Athlete } from "../types";

interface AthleteRowProps {
  athlete: Athlete;
}

const AthleteRow: React.FC<AthleteRowProps> = ({ athlete }) => {
  return (
    <tr className="font-arial text-center overflow-auto">
      <td>{athlete.rank}</td>
      <td>{athlete.bibnumber}</td>
      <td>{`${athlete.firstname} ${athlete.surname}`}</td>
      <td>{athlete.finishtime}</td>
      <td>{athlete.flag}</td>
    </tr>
  );
};

export default AthleteRow;
