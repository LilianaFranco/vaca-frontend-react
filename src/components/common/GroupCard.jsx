import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
          padding: 3,
          backgroundColor: group.color,
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardHeader title={group.name} sx={{ padding: "0px 8px" }} />
        <Typography sx={{ padding: "8px" }}>
          {group.balanceStatus}: ${group.balanceValue} COP
        </Typography>
        <CardActions>
          <Button size="small" variant="contained">
            EDITAR
          </Button>
          <Button size="small" variant="contained" startIcon={<DeleteIcon />}>
            ELIMINAR
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
