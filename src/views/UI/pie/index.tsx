import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../shared/BarChart";
import Header from "../../shared/Header";
import PieChart from "../../shared/PieChart";

type Props = {};

const Pie = (props: Props) => {
  return (
    <Box m="20px">
      <Header
        title="BAR CHART"
        subTitle="Pie Chart Representations of Analytics"
      />
      <Box height="60vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
