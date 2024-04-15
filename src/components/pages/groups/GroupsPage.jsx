import React, { useState } from "react";
import GroupCard from "../../common/GroupCard";
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
              <GroupCard group={group} />
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
