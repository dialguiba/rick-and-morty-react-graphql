import React from "react";
import { CharacterCard } from "../molecules/CharacterCard";

export const ResultsSection = ({ characters, loading }) => {
  const propsToPass = (character) => ({
    name: character.name,
    image: character.image,
    status: character.status,
    loading: loading,
  });

  return (
    <div className="row">
      {characters.length > 0 ? React.Children.toArray(characters.map((character) => <CharacterCard {...propsToPass(character)} />)) : "No results"}
    </div>
  );
};
