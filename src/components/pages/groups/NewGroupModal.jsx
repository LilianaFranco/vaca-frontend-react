import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const NewGroupModal = ({ open, handleClose }) => {
  const [groupName, setGroupName] = useState();

  const handleChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleCreateGroup = () => {
    // Here you can handle creating a new group with the group name
    console.log("Creating group:", groupName);
    // Reset the group name input after creating the group
    setGroupName("");
    // Close the modal
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nuevo Grupo
            </Typography>
            <Button variant="contained" onClick={handleClose}>
              X
            </Button>
          </Container>
          <Typography variant="body1" sx={{ mt: 3 }}>
            Para crear un grupo elige un nombre único y un color para
            diferenciarlo.
          </Typography>
          <TextField
            fullWidth
            sx={{ margin: "30px 0px" }}
            label="Nombre (Obligatorio)"
            multiline
            maxRows={4}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleCreateGroup}>
            Crear grupo
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewGroupModal;
