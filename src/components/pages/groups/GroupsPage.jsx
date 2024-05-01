import React, { useState } from "react";
import GroupCard from "src/components/common/GroupCard";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Container,
  ListItem,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewGroupModal from "./NewGroupModal";
import { useNavigate } from "react-router-dom";

const GroupsPage = ({
  groups,
  onGroupsRefresh,
  snackbarOpen,
  setSnackbarOpen,
}) => {
  console.log(snackbarOpen);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onGroupsRefresh();
    setOpen(false);
    console.log("Modal closed");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  }; // Define handleSnackbarClose function here

  const navigate = useNavigate();

  const handleCardClick = (group) => {
    console.log(group.id);
    navigate(`/groups/${group.id}`);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: { xs: "10px", md: "20px" },
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box>
            <Typography variant="h6">Debes:</Typography>
            <Typography variant="h5" color="red">
              $0 COP
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Nuevo grupo
          </Button>
        </Container>
        {open && (
          <NewGroupModal
            open={open}
            handleClose={handleClose}
            setSnackbarOpen={setSnackbarOpen}
            snackbarOpen={snackbarOpen}
          />
        )}

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {groups.map((group, index) => (
            <ListItem
              key={index}
              sx={{ width: { xs: "unset", md: "fit-content" } }}
            >
              <GroupCard
                group={group}
                actions={
                  <React.Fragment>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<EditIcon />}
                      onClick={() => handleCardClick(group)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<DeleteIcon />}
                    >
                      Eliminar
                    </Button>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Grupo creado exitosamente!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default GroupsPage;
