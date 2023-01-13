import React from "react";
import Box from '@mui/material/Box';
import {Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./CharacterCard.css"


function CharacterCard({character}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
          
          
        </div>  
      </div>
    </div>
  );
}

export default CharacterCard;
