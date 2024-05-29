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
      <button
        className="bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4"
        onClick={sortByRank}
      >
        Sort by Rank
      </button>
      <button
        className="bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={sortByBibNumber}
      >
        Sort by Bib Number
      </button>
    </div>
  );
};

export default SortOptions;
