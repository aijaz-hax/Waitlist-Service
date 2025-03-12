import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
      <CircularProgress size={24}/>
    </Box>
  );
};

export default LoadingSpinner;
