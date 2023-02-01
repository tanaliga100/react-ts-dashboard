import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import GeoChart from "../../shared/GeographyChart";
import Header from "../../shared/Header";

type Props = {};

const Geo = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="GEO CHART"
        subTitle="Geo Chart Representations of Analytics"
      />
      <Box height="60vh" py="2rem" border={`.5px solid ${colors.grey[100]}`}>
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
