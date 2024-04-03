import { Grid, ListItem } from "@mui/material";
import React, { useState } from "react";

const ColorPicker = () => {
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

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <Grid
      container
      spacing={1}
      marginBottom="30px"
      sx={{ width: { xs: "100%", md: "70%" } }}
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
            onClick={() => handleColorSelect(color)}
          ></ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorPicker;
