import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../shared/BarChart";
import Header from "../../shared/Header";

type Props = {};

const Bar = (props: Props) => {
  return (
    <Box m="20px">
      <Header
        title="BAR CHART"
        subTitle="Bar Chart Representations of Analytics"
      />
      <Box height="60vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
