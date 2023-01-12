import {Grid} from "@mui/material";
import CharacterCard from "./CharacterCard";

function ListOfCharacters({ characters }) {
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <Grid item>
          <CharacterCard key={character.id} character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListOfCharacters;
