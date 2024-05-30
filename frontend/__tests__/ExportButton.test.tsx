import React from "react";
import "@testing-library/jest-dom";
import ExportButton from "../components/ExportButton";
import { render } from "@testing-library/react";

describe("ExportButton", () => {
  const athletes = [
    {
      rank: 1,
      firstname: "Samuel",
      surname: "White",
      athleteid: "sw007",
      finishtime: "2:10:30",
      raceprogress: "completed",
      teamname: "Team USA",
      bibnumber: "012",
      flag: "USA",
      countryname: "United States",
    },
  ];

  it("renders without crashing", () => {
    const { getByText } = render(<ExportButton athletes={athletes} />);
    expect(getByText("Export to CSV")).toBeInTheDocument();
  });
});
