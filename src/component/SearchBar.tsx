import React from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks by title..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 rounded-md"
    />
  );
};

export default SearchBar;
