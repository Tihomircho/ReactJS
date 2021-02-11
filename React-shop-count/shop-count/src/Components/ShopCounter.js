import React, { useState } from "react";
import { Button, Box, TextField } from "@material-ui/core";

const ShopCounter = () => {
  const [count, setCount] = useState(0);

  const [currentPrice, setCurrentPrice] = useState(5);

  const HandlePlus = () => {
    setCount(count + 1);
  };
  const changePrice = e => {
    setCurrentPrice(e.target.value);
  };
  const HandleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalPrice = count * currentPrice;

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={HandlePlus}>
        Add Item
      </Button>
      <TextField
        onChange={changePrice}
        id="standard-basic"
        defaultValue={currentPrice}
      />
      {/* buttons */}
      <Button variant="contained" color="primary" onClick={HandleMinus}>
        Take Out Item
      </Button>
      <div>Items Quantity: {count}</div>
      <div>items Price: {totalPrice} $</div>
    </Box>
  );
};
export default ShopCounter;
