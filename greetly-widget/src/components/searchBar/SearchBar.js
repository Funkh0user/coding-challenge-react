import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <input
        type="text"
        className="border"
        placeholder="Enter a name"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div></div>
    </div>
  );
};

export default SearchBar;
