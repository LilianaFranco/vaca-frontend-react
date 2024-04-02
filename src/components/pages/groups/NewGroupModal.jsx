import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../../services/GroupService";

const NewGroupModal = ({ open, handleClose }) => {
  const [newGroup, setNewGroup] = useState({
    id: "",
    name: "",
    color: "",
    balanceStatus: "",
    balanceValue: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewGroup({ ...newGroup, [e.target.name]: e.target.value });
  };

  const handleCreateGroup = () => {
    const data = {
      name: newGroup.name,
    };
    console.log(data);

    const createGroup = create(data);
    createGroup
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => console.log(err));
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
            width: { xs: "75%", md: "40%" },
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: 0 },
            }}
          >
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
            sx={{ margin: "30px 0px", border: "ActiveBorder" }}
            label="Nombre (Obligatorio)"
            multiline
            maxRows={4}
            name="name"
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
