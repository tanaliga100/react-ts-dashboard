import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { mockDataTeam } from "../../../data/mockData";
import { tokens } from "../../../theme";
import Header from "../../shared/Header";

type Props = {};

const Team = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name=column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "PHONE NUMBER",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },
    {
      field: "access",
      headerName: "ACCESS LEVEL",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            display="flex"
            fontSize="1rem"
            textTransform="uppercase"
            justifyContent="center"
            borderRadius="5px"
            p="3px"
            color={colors.primary[200]}
            sx={{
              backgroundColor: [
                (access === "admin" && colors.greenAccent[700]) ||
                  (access === "manager" && colors.redAccent[800]) ||
                  (access === "user" && colors.greenAccent[900]),
              ],
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[200]} sx={{ mx: "10px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the team members" />
      <Box
        m="10px 0 0 0"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name=column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders ": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtaulScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer ": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};
export default Team;
