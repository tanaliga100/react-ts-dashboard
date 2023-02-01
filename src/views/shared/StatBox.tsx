import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  progress: string;
  increase: number | string;
  size?: string;
};

const StatBox = (props: Props) => {
  const { title, subtitle, icon, progress, increase } = props;

  const toNumber = Number(progress);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: { backgroundColor: colors.blueAccent[900] },
            color: { color: colors.primary[900] },
          }}
          p="10px"
          m="1rem"
          borderRadius="2px"
        >
          <ProgressCircle progress={toNumber} size={props.size} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
