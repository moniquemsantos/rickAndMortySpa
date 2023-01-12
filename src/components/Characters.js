import CharacterCard from "./Character";

function Characters({ characters }) {
  return (
    <div>
      {characters.map((character) => <CharacterCard key={character.id} character={character}/>)}
    </div>
  );
}

export default Characters;
