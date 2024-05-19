import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import cardLogo from "src/assets/Logo.svg";
import React from "react";

const GroupCard = ({ group, actions }) => {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        image={cardLogo}
        alt="Vaca Logo"
        sx={{
          height: "60px",
          margin: 2,
          padding: 3,
          backgroundColor: group.color,
          borderRadius: "4px",
        }}
      />
      <CardContent
        sx={{
          display: "block",
          "&:last-child": { paddingBottom: 0 },
        }}
      >
        <Typography variant="h6" gutterBottom>
          {group.name}
        </Typography>
        <Typography variant="body1">
          {group.balanceStatus}: ${group.balanceValue} COP
        </Typography>
        <CardActions
          sx={{ justifyContent: "space-between", padding: "10px 0px" }}
        >
          {actions}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
