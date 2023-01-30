import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import styled from "@emotion/styled";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const TopBar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* SEARCH_BAR */}
      <Box
        display="flex"
        sx={{
          backgroundColor: { background: colors.primary[400] },
          borderRadius: "4px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
