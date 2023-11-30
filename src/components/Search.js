import React from "react";

function Search({ handleSearch, search }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
