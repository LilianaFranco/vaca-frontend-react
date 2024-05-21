import { Box, Button, Chip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import GroupCard from "src/components/common/GroupCard";
import Divider from "@mui/material/Divider";
import ExpensesCard from "src/components/common/ExpensesCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const GroupDetailPage = ({ group }) => {
  const handleCardClick = () => {};

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-around", md: "end" },
            alignItems: { xs: "center", md: "end" },
            marginTop: "30px",
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
            display: "flex",
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
        <Chip
          icon={<CalendarMonthIcon />}
          label="Mes"
          sx={{ marginBottom: "20px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
        </Box>
      </Box>
    </div>
  );
};

export default GroupDetailPage;
