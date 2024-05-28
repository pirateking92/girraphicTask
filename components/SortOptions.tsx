import React from "react";

interface SortOptionsProps {
  sortByRank: () => void;
  sortByBibNumber: () => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortByRank,
  sortByBibNumber,
}) => {
  return (
    <div>
      <button onClick={sortByRank}>Sort by Rank</button>
      <button onClick={sortByBibNumber}>Sort by Bib Number</button>
    </div>
  );
};

export default SortOptions;
