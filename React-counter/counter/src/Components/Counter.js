import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseItem = () => {
    setCount(count + 1);
  };
  const decreaseItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={increaseItem}>
        +
      </Button>
      <Button variant="contained" color="primary" onClick={decreaseItem}>
        -
      </Button>

      <div>{count}</div>
      <Button variant="contained" color="primary" onClick={Reset}>
        RESET
      </Button>
    </Box>
  );
};
export default Counter;
