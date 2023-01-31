import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Button, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import React from "react";
import { mockDataContacts } from "../../../data/mockData";
import { tokens } from "../../../theme";
import Header from "../../shared/Header";

type Props = {};

const Contacts = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "REGISTRAR ID" },

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
      field: "address",
      headerName: "ADDRESS",
      flex: 1,
    },
    {
      field: "city",
      headerName: "CITY",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZIP CODE",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subTitle=" List of Contacts for future reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[500],
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
