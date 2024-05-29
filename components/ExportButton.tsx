import React from "react";
import { CSVLink } from "react-csv";
import { Athlete } from "../types";
import { Tooltip } from "flowbite-react";

const generateCSV = (athletes: Athlete[] | undefined) => {
  if (!athletes || athletes.length === 0) {
    return "";
  }

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
    <Tooltip
      content="Click to download CSV file in selected order"
      style="light"
      animation="duration-500"
      placement="bottom"
    >
      <CSVLink
        className="bg-gray-300 hover:bg-gray-400 border border-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        data={csvData}
        filename="race_results.csv"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Export to CSV
      </CSVLink>
    </Tooltip>
  );
};

export default ExportButton;
