import React, { useEffect, useState } from "react";
import Character from "./Character";

function Characters({ characters } ) {
  return (
    <div>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default Characters;
