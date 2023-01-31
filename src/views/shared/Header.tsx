import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

type Props = {
  title: string;
  subTitle: string;
};

const Header = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[500]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {props.title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {props.subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
