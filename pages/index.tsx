import { GetServerSideProps } from "next";
// allows us to fetch data on the server side and pass it as props to the page component
// JSON data is thus collected on every request, so handles cases when info is changed
import { Athlete } from "../types";
import { useState } from "react";
import AthleteList from "../components/AthleteList";
import SortOptions from "../components/SortOptions";
import ExportButton from "../components/ExportButton";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/athletes");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const athletes: Athlete[] = await res.json();

  return {
    props: { athletes },
  };
};

const IndexPage = ({ athletes }: { athletes: Athlete[] }) => {
  const [athletesState, setAthletesState] = useState<Athlete[]>(athletes);

  const sortByRank = () => {
    const sortedAthletes = [...athletesState].sort((a, b) => a.rank - b.rank);
    setAthletesState(sortedAthletes);
  };
  // bib number is a string, so need to parse it as an integer to get it to read properly
  const sortByBibNumber = () => {
    const sortedAthletes = [...athletesState].sort((a, b) => {
      const bibnumA = parseInt(a.bibnumber, 10);
      const bibnumB = parseInt(b.bibnumber, 10);
      return bibnumA - bibnumB;
    });
    setAthletesState(sortedAthletes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <AthleteList
        athletes={athletesState}
        sortByRank={sortByRank}
        sortByBibNumber={sortByBibNumber}
      />
      <SortOptions sortByRank={sortByRank} sortByBibNumber={sortByBibNumber} />
      <ExportButton athletes={athletesState} />
    </div>
  );
};

export default IndexPage;
