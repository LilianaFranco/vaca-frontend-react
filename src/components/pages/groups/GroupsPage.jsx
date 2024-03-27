import React, { useState } from "react";
import GroupCard from "../../common/GroupCard";
import { Box, Button, Container, ListItem, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewGroupModal from "./NewGroupModal";

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
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {groups.map((group) => (
            <ListItem key={group.id} sx={{ minWidth: 0 }}>
              <GroupCard group={group} />
            </ListItem>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default GroupsPage;
