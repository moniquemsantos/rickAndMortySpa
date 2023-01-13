import { useEffect, useState } from "react";
import {Grid} from "@mui/material";
import CharacterCard from "./CharacterCard";

function ListOfCharacters({ filter, characters }) {
  const [filteredCharacters, setFilteredCharacters] = useState([characters]);
  useEffect(() => {
    const filtered = filter ? characters.filter((character) => {
      return character.name.toLowerCase().startsWith(filter.toLowerCase());
    }): characters;
    console.info("filtered", filtered);
    console.info("not Filtered", characters);
    setFilteredCharacters(filtered);
  }, [filter, characters]);

  return (
    <Grid container spacing={2}>
      {filteredCharacters.map((character) => (
        <Grid item>
          <CharacterCard key={character.id} character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListOfCharacters;
