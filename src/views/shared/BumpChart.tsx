import { Box, useTheme } from "@mui/material";
import { ResponsiveBump } from "@nivo/bump";
import React from "react";
import { mockLineData as data } from "../../data/mockData";
import { tokens } from "../../theme";

type Props = {
  isDashboard?: boolean;
};

const BumpChart = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // <ResponsiveBump
    //   data={data}
    //   colors={{ scheme: "spectral" }}
    //   lineWidth={3}
    //   activeLineWidth={6}
    //   inactiveLineWidth={3}
    //   inactiveOpacity={0.15}
    //   pointSize={10}
    //   activePointSize={16}
    //   inactivePointSize={0}
    //   pointColor={{ theme: "background" }}
    //   pointBorderWidth={3}
    //   activePointBorderWidth={3}
    //   pointBorderColor={{ from: "serie.color" }}
    //   enableGridX={false}
    //   enableGridY={false}
    //   axisTop={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "",
    //     legendPosition: "middle",
    //     legendOffset: -36,
    //   }}
    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "",
    //     legendPosition: "middle",
    //     legendOffset: 32,
    //   }}
    //   axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: "ranking",
    //     legendPosition: "middle",
    //     legendOffset: -40,
    //   }}
    //   margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    //   axisRight={null}
    // />
    <ResponsiveBump
      data={data}
      colors={{ scheme: "greens" }}
      lineWidth={3}
      activeLineWidth={8}
      inactiveLineWidth={4}
      inactiveOpacity={0.15}
      startLabelTextColor={{ theme: "background" }}
      endLabelPadding={30}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      enableGridX={false}
      enableGridY={false}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  );
};

export default BumpChart;
