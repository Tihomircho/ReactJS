import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
  Divider,
  ListItemSecondaryAction
} from "@material-ui/core";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const HandleClick = () => {
    setWidth(window.innerWidth);
  };
  const HandleClickH = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", HandleClick);
    window.addEventListener("resize", HandleClickH);
  });

  return (
    <div className="box">
      <Button variant="contained" color="primary" onClick={HandleClick}>
        Show width
      </Button>
      <Button variant="contained" color="primary" onClick={HandleClickH}>
        Show Height
      </Button>
      <div>Screen Width: {width}</div>
      <div>Screen Height: {height}</div>
    </div>
  );
};
export default WindowWidth;
