import React from "react";
import {Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./CharacterCard.css"


function CharacterCard({character}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("prop", character)

  return (
    <div className="flip-card">
      < div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt={character.name}/>
        </div>
        <div className="flip-card-back">
          <p>{character.name}</p>
          <Button onClick={handleOpen} variant="contained">Read More</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="flipCardDetail">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name}/>
              <p> {`Species: ${character.species}`}</p>
              <p>{`Status: ${character.status}`}</p>
            
            </div>
          </Modal>
          
          
        </div>  
      </div>
    </div>
  );
}

export default CharacterCard;
