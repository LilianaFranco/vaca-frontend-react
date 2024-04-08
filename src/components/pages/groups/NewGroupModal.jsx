import {
  Alert,
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { create } from "../../../services/GroupService";
import ColorPicker from "../../common/ColorPicker";

const NewGroupModal = ({ open, handleClose }) => {
  const [newGroup, setNewGroup] = useState({
    id: "",
    name: "",
    color: "#FFFFFF",
    balanceStatus: "",
    balanceValue: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameEmpty: "",
    nameExceedingLength: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const handleNameChange = (e) => {
    setNewGroup({ ...newGroup, [e.target.name]: e.target.value });
    console.log(newGroup.name);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setNewGroup({ ...newGroup, color: color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newGroup.name.length === 0) {
      console.log(showAlert);
      setShowAlert(true);
      setErrorMessage({
        ...errorMessage,
        nameEmpty: "Elige un nombre para continuar",
      });
    } else if (newGroup.name.length > 30) {
      console.log(showAlert);
      setErrorMessage({
        ...errorMessage,
        nameExceedingLength: "El nombre no puede tener más de 30 caracteres",
      });
    } else {
      console.log(showAlert);
      handleCreateGroup();
      setShowAlert(false);
    }
  };

  const handleCreateGroup = () => {
    console.log(showAlert);
    const data = {
      name: newGroup.name,
      color: newGroup.color,
    };
    console.log(data);

    const createGroup = create(data);
    createGroup
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
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
            width: { xs: "75%", md: "25%" },
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: 0 },
            }}
          >
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Nuevo Grupo
            </Typography>
            <Button variant="contained" onClick={handleClose}>
              X
            </Button>
          </Container>
          <form onSubmit={handleSubmit}>
            <TextField
              border={1}
              fullWidth
              sx={{ margin: "30px 0px" }}
              label="Nombre (Obligatorio)"
              name="name"
              variant="outlined"
              onChange={handleNameChange}
            />
            <ColorPicker
              handleSelect={handleColorSelect}
              selectedColor={selectedColor}
            />
            {showAlert && (
              <Alert severity="error">
                {errorMessage.nameEmpty || errorMessage.nameExceedingLength}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "30px" }}
            >
              Crear grupo
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default NewGroupModal;
