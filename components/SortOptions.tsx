import React from "react";
import { Tooltip } from "flowbite-react";

interface SortOptionsProps {
  sortByRank: () => void;
  sortByBibNumber: () => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortByRank,
  sortByBibNumber,
}) => {
  return (
    <div className="flex gap-2">
      <Tooltip
        content="Click to sort by rank"
        style="light"
        animation="duration-500"
        placement="bottom"
      >
        <button
          // "tooltips"
          className="bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4"
          onClick={sortByRank}
        >
          Sort by Rank
        </button>
      </Tooltip>
      <Tooltip
        content="Click to sort by bib number"
        style="light"
        animation="duration-500"
        placement="bottom"
      >
        <button
          className="bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={sortByBibNumber}
        >
          Sort by Bib Number
        </button>
      </Tooltip>
    </div>
  );
};

export default SortOptions;
