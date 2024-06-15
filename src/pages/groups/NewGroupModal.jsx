import React, { useState } from "react";
import { create } from "src/services/groupServices/GroupService";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import ColorPicker from "../../components/common/ColorPicker";
import { Alert } from "@mui/material";
import { newGroupSchemaValidation } from "../../validations/groups.schema.validations";

const NewGroupModal = ({ open, handleClose, setSnackbarConfig }) => {
  const [newGroup, setNewGroup] = useState({
    id: "",
    name: "",
    ownerUserId: "",
    color: "#FFFFFF",
    balanceStatus: "",
    balanceValue: "",
    createdAt: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value.trim().toLowerCase();
    setNewGroup({ ...newGroup, name: newName });
    setErrorMessage("");
  };

  const handleColorSelect = (color) => {
    setNewGroup({ ...newGroup, color: color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = newGroupSchemaValidation.validate(newGroup, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      setErrorMessage(error.details[0].message);
      return;
    } else {
      handleCreateGroup();
      setErrorMessage("");
    }
  };

  const handleCreateGroup = () => {
    const data = {
      name: newGroup.name.trim(),
      color: newGroup.color,
      ownerUserId: "",
      balanceStatus: "",
      balanceValue: "",
      createdAt: "Hoy",
    };

    const createGroup = create(data);
    createGroup
      .then((res) => {
        handleClose();
        setSnackbarConfig({
          message: "El grupo fue creado exitosamente",
          open: true,
          severity: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setErrorMessage("El grupo ya existe. Elige otro nombre.");
        }
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
            borderRadius: "5px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: { xs: "75%", sm: "45%", md: "45%", lg: "25%" },
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
              selectedColor={newGroup.color}
            />
            {!!errorMessage && (
              <Alert severity="error" sx={{ marginTop: "20px" }}>
                {errorMessage}
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
