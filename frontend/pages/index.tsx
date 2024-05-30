import { GetServerSideProps } from "next";
// allows us to fetch data on the server side and pass it as props to the page component
// JSON data is thus collected on every request, so handles cases when info is changed
import { Athlete } from "../types";
import { RaceResults } from "../types";
import { useState } from "react";
import AthleteList from "../components/AthleteList";
import SortOptions from "../components/SortOptions";
import ExportButton from "../components/ExportButton";

export const getServerSideProps: GetServerSideProps = async () => {
  // routes are the filenames
  const res = await fetch("http://localhost:4000/api/marathons");
  if (!res.ok) {
    // error checking
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  // currently getting props for the racename and all the athlete info. could change later depending on what info we might need to pull
  const { racename, athletes }: { racename: string; athletes: Athlete[] } =
    await res.json();

  return {
    props: { racename, athletes },
  };
};

const IndexPage = ({
  racename,
  athletes,
}: {
  racename: string;
  athletes: Athlete[];
}) => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url('https://thumbs.dreamstime.com/b/giraffe-isolated-12314083.jpg')]">
      <nav className="bg-slate-400 p-4 fixed top-0 w-full z-50">
        <ul className="flex justify-between">
          <li>
            <a href="#" className="text-white peer-hover:">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <AthleteList athletes={athletesState} racename={racename} />
      <div className="flex space-x-4 mb-4">
        <SortOptions
          sortByRank={sortByRank}
          sortByBibNumber={sortByBibNumber}
        />
        <ExportButton athletes={athletesState} />
      </div>
    </div>
  );
};

export default IndexPage;
