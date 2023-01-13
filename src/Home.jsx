import ListOfCharacters from "./components/ListOfCharacters";
import {useEffect, useState} from "react";
import Header from "./components/Header";

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
      <Header/>
      <ListOfCharacters characters={characters}/>
    </div>
  );
}

export default HomePage;