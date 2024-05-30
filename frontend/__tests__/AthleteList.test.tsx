import React from "react";
import "@testing-library/jest-dom";
import AthleteList from "../components/AthleteList";
import { render } from "@testing-library/react";
import { Athlete } from "../types";

const athlete: Athlete[] = [
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

const racename = "2023 Bexford Marathon";

describe("AthleteList", () => {
  it("renders the headings of the table correctly", () => {
    const { getByText } = render(
      <AthleteList athletes={athlete} racename={racename} />
    );
    console.log(<AthleteList athletes={athlete} racename={racename} />);
    expect(getByText("Rank")).toBeInTheDocument();
    expect(getByText("Bib Number")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Finish Time")).toBeInTheDocument();
    expect(getByText("Country Code")).toBeInTheDocument();
  });
});
