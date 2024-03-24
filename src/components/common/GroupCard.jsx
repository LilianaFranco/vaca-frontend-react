import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const GroupCard = ({ group }) => {
  console.log(group);
  return (
    <Card sx={{ display: "flex", margin: "15px" }}>
      <CardMedia
        component="img"
        image="src/assets/Logo.svg"
        alt="Vaca Logo"
        sx={{
          width: 120,
          alignSelf: "center",
          margin: 2,
          padding: 2,
          backgroundColor: group.color,
        }}
      />
      <CardContent>
        <CardHeader title={group.name} sx={{ padding: "8px" }} />
        <Typography sx={{ padding: "8px" }}>
          {group.balanceStatus}: ${group.balanceValue} COP
        </Typography>
        <CardActions>
          <Button size="small" variant="contained">
            EDITAR
          </Button>
          <Button size="small" variant="contained">
            ELIMINAR
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
