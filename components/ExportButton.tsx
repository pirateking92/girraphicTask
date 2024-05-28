import React from "react";
import { CSVLink } from "react-csv";
import { Athlete } from "../types";

const generateCSV = (athletes: Athlete[]) => {
  const csvRows = [];
  const headers = ["Rank", "Full Name", "Finish Time", "Country Name"];
  csvRows.push(headers.join(","));

  athletes.forEach((athlete) => {
    const fullName = `${athlete.firstname} ${athlete.surname}`;
    const row = [
      athlete.rank,
      fullName,
      athlete.finishtime,
      athlete.countryname,
    ];
    csvRows.push(row.join(","));
  });

  return csvRows.join("\n");
};

interface ExportButtonProps {
  athletes: Athlete[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ athletes }) => {
  const csvData = generateCSV(athletes);

  return (
    <CSVLink data={csvData} filename="race_results.csv">
      Export to CSV
    </CSVLink>
  );
};

export default ExportButton;
