import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AthleteRow from "../components/AthleteRow";
import { Athlete } from "../types";

const athlete: Athlete = {
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
};

describe("AthleteRow", () => {
  it("renders athlete data correctly", () => {
    const { getByText } = render(<table><tbody><AthleteRow athlete={athlete} /></tbody></table>);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(getByText("012")).toBeInTheDocument();
    expect(getByText("Samuel White")).toBeInTheDocument();
    expect(getByText("2:10:30")).toBeInTheDocument();
    expect(getByText("USA")).toBeInTheDocument();
  });
});
