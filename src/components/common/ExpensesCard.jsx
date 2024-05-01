import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";

const ExpensesCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "95%",
        marginBottom: "10px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: { xs: 0, md: "20px" },
          }}
        >
          <Chip label="Fecha" />
          <Typography variant="h6" sx={{ marginLeft: { xs: 0, md: "10px" } }}>
            Nombre
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: { xs: 0, md: "20px" },
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginRight: { xs: 0, md: "10px" } }}
          >
            Descripción que es muy larga
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />
          <Typography
            variant="body1"
            sx={{ marginRight: { xs: 0, md: "10px" } }}
          >
            Mi estado
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpensesCard;
