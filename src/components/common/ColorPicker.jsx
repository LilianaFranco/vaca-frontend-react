import { Box, Grid, ListItem } from "@mui/material";
import React, { useState } from "react";

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: { xs: "100%", md: "100%", padding: "10px" } }}
      >
        {colorPalette.map((color, index) => (
          <Grid item xs={3} key={index}>
            <ListItem
              component="button"
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: color,
                width: "80%",
                height: "50px",
                borderRadius: "3px",
                border: selectedColor === color ? "2px solid black" : "none",
              }}
              onClick={() => handleSelect(color)}
            ></ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorPicker;
