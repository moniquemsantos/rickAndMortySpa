import React, { useEffect, useState } from "react";
import Character from "./Character";

function Characters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCharacters(result.results);
      });
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default Characters;
