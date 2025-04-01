import React, { useState } from "react";


function CSUNMapSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const BASE_MAP_URL = "https://3dmap.csun.edu/?id=1100#!s/?sbc/";
  const SEARCH_MAP_URL = "https://3dmap.csun.edu/?id=1100#!s/";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      document.getElementById("mm-iframe").src = `${SEARCH_MAP_URL}${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4"></h2>

      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn ms-2 btn-seemore">Search</button>
      </form>

      <div className="mm-map-container">
        <iframe
          id="mm-iframe"
          src={BASE_MAP_URL}
          title="CSUN 3D Map"
          width="119%"
          height="700px"
        ></iframe>
      </div>
    </div>
  );
}

export default CSUNMapSearch;
