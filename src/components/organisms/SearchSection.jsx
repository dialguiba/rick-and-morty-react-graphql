import { useLazyQuery } from "@apollo/client";
import React from "react";
import { getCharacters } from "../../graphql/characters";
import { SearchInput } from "../molecules/SearchInput";

export const SearchSection = ({ setCharacters, setLoading }) => {
  const [executeSearch] = useLazyQuery(getCharacters);

  const handleSearch = (val) => {
    setLoading(true);
    executeSearch({ variables: { name: val } })
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data.characters.results);
        setLoading(false);
      })
      .catch((err) => {
        setCharacters([]);
        setLoading(false);
      });
  };
  return (
    <div>
      <SearchInput handleSearch={handleSearch} setLoading={setLoading} />
    </div>
  );
};
