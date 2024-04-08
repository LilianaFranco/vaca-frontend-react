import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.preventDefault();
    navigate(`/groups/${group.id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        image="src/assets/Logo.svg"
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
          <Button
            size="small"
            variant="contained"
            startIcon={<EditIcon />}
            onClick={handleCardClick}
          >
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
