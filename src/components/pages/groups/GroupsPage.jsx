import React, { useState } from "react";
import GroupCard from "../../common/GroupCard";
import { Box, Button, Container, ListItem, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewGroupModal from "./NewGroupModal";
import { Navigate } from "react-router-dom";

const GroupsPage = ({ groups }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
              $12.000 COP
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
        <NewGroupModal open={open} handleClose={handleClose} />
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
      </Box>
    </div>
  );
};

export default GroupsPage;
