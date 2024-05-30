import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortOptions from "../components/SortOptions";

describe("SortOptions Component", () => {
  const sortByRankMock = jest.fn();
  const sortByBibNumberMock = jest.fn();

  beforeEach(() => {
    render(
      <SortOptions
        sortByRank={sortByRankMock}
        sortByBibNumber={sortByBibNumberMock}
      />
    );
  });

  test("renders Sort by Rank button with tooltip", () => {
    const sortByRankButton = screen.getByText("Sort by Rank");
    expect(sortByRankButton).toBeInTheDocument();
    fireEvent.mouseOver(sortByRankButton);
    expect(screen.getByText("Click to sort by rank")).toBeInTheDocument();
  });

  test("renders Sort by Bib Number button with tooltip", () => {
    const sortByBibNumberButton = screen.getByText("Sort by Bib Number");
    expect(sortByBibNumberButton).toBeInTheDocument();
    fireEvent.mouseOver(sortByBibNumberButton);
    expect(screen.getByText("Click to sort by bib number")).toBeInTheDocument();
  });

  test("calls sortByRank when Sort by Rank button is clicked", () => {
    const sortByRankButton = screen.getByText("Sort by Rank");
    fireEvent.click(sortByRankButton);
    expect(sortByRankMock).toHaveBeenCalled();
  });

  test("calls sortByBibNumber when Sort by Bib Number button is clicked", () => {
    const sortByBibNumberButton = screen.getByText("Sort by Bib Number");
    fireEvent.click(sortByBibNumberButton);
    expect(sortByBibNumberMock).toHaveBeenCalled();
  });
});
