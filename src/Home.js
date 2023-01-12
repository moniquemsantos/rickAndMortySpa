import SearchBox from "./components/SearchBox";
import Characters from "./components/Characters";
import {useEffect, useState} from "react";

function HomePage() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.info(result);
        setCharacters(result.results);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <Characters characters={ characters }/>
    </div>
  );
}

export default HomePage;
