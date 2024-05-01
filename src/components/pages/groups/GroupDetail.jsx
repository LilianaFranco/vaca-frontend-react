import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import GroupCard from "src/components/common/GroupCard";
import Divider from "@mui/material/Divider";

const GroupDetail = ({ group }) => {
  const handleCardClick = () => {
    console.log("Me fui del grupo");
  };
  console.log(group);
  // const { name, color, id } = group;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-around", md: "end" },
            alignItems: { xs: "center", md: "end" },
            margin: "30px",
            alignSelf: "flex-end",
          }}
        >
          <Button
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginRight: "10px" }}
          >
            Gasto
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginRight: "10px" }}
          >
            Amigo
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ marginRight: "10px" }}
          >
            Grupo
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "unset", md: "fit-content" },
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GroupCard
            group={group}
            actions={
              <React.Fragment>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<ExitToAppIcon />}
                  onClick={() => handleCardClick()}
                >
                  Abandonar
                </Button>
              </React.Fragment>
            }
          />
        </Box>
        <Divider sx={{ my: 4, width: "95%" }}>
          <Typography primary="Middle variant below" variant="h6">
            Historial de gastos
          </Typography>
        </Divider>
        <Box>Me deben</Box>
      </Box>
    </div>
  );
};

export default GroupDetail;
