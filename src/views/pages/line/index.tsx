import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../shared/BarChart";
import BumpChart from "../../shared/BumpChart";
import Header from "../../shared/Header";

type Props = {};

const Bump = (props: Props) => {
  return (
    <Box m="20px">
      <Header
        title="BAR CHART"
        subTitle="Bump Chart Representations of Analytics"
      />
      <Box height="60vh">
        <BumpChart />
      </Box>
    </Box>
  );
};

export default Bump;
