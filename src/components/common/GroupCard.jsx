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
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/groups/${group.id}`);
  };

  return (
    <Card>
      {/* <div>
        <img src="src/assets/Logo.svg" alt="" />
      </div> */}
      <CardActionArea
        onClick={handleCardClick}
        sx={{
          display: "flex",
        }}
      >
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
      </CardActionArea>
    </Card>
  );
};

export default GroupCard;
