import { Grid, ListItem } from "@mui/material";
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
    <Grid
      container
      spacing={1}
      sx={{ width: { xs: "100%", md: "70%" }, margin: "0 auto 30px" }}
    >
      {colorPalette.map((color, index) => (
        <Grid item xs={3} key={index}>
          <ListItem
            component="button"
            style={{
              backgroundColor: color,
              width: "100%",
              height: "50px",
              borderRadius: "3px",
              border: selectedColor === color ? "2px solid black" : "none",
            }}
            onClick={() => handleSelect(color)}
          ></ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorPicker;
