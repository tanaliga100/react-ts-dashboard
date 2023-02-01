import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

type Props = {
  progress?: any;
  size?: string;
};

const ProgressCircle = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const angle = props?.progress * 360;

  return (
    <Box
      sx={{
        background: {
          background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
          ${colors.greenAccent[500]}`,
        },
        color: { color: colors.greenAccent[100] },

        borderRadius: { borderRadius: "50%" },
        width: `${props.size}px`,
        height: `${props.size}px`,
      }}
    >
      <Typography>{angle}%</Typography>
    </Box>
  );
};

export default ProgressCircle;
