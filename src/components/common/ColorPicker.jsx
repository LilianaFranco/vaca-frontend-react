import { Box, Grid, IconButton, ListItem } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const ColorPicker = ({ handleSelect, selectedColor }) => {
  const colorPalette = [
    "#A65293",
    "#66B04C",
    "#995036",
    "#4E80A5",
    "#CCCCCC",
    "#FFA72F",
    "#FF2530",
    "#FFFFFF",
  ];

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#858583",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        {colorPalette.map((color, index) => (
          <Grid item xs={3} key={index}>
            <ListItem
              component="button"
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: color,
                width: "100%",
                height: "60px",
                borderRadius: "3px",
                border:
                  selectedColor === color
                    ? "2px solid black"
                    : "1px solid black",
                position: "relative",
                boxShadow:
                  selectedColor === color && "0px 0px 15px rgba(0, 0, 0, 0.3)",
                transition: "border 0.3s",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(color);
              }}
            >
              {selectedColor === color && (
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    padding: 0,
                  }}
                >
                  <CheckIcon />
                </IconButton>
              )}
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorPicker;
