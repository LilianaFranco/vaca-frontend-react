import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

const GroupCard = ({ group }) => {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      {/* <div>
        <img src="src/assets/Logo.svg" alt="" />
      </div> */}

      <CardMedia
        component="img"
        image="src/assets/Logo.svg"
        alt="Vaca Logo"
        sx={{
          height: 50,
          width: 50,
          alignSelf: "center",
          margin: 2,
          padding: 3,
          backgroundColor: group.color,
        }}
      />
      <CardContent
        sx={{
          display: "block",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {group.name}
        </Typography>
        <Typography variant="body1">
          {group.groupStatus}: ${group.balanceValue} COP
        </Typography>
        <CardActions
          sx={{ justifyContent: "space-between", padding: "10px 0px" }}
        >
          <Button size="small" variant="contained" startIcon={<EditIcon />}>
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
