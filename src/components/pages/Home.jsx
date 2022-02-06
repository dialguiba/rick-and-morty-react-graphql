import React, { useState } from "react";
import { ResultsSection } from "../organisms/ResultsSection";
import { SearchSection } from "../organisms/SearchSection";
import ReactLoading from "react-loading";

import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("test");

  return (
    <div className="container">
      <h1>Rick & Morty</h1>
      <div>
        <SearchSection setCharacters={setCharacters} setLoading={setLoading} />
      </div>
      <div>{loading ? <ReactLoading type="cylon" color="red" /> : <ResultsSection characters={characters} />}</div>
    </div>
  );
};
