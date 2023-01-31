import { Box } from "@mui/material";
import React from "react";
import Header from "../../shared/Header";

const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default DashBoard;
