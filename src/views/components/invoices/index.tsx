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
import { mockDataInvoices } from "../../../data/mockData";
import { tokens } from "../../../theme";
import Header from "../../shared/Header";

type Props = {};

const Invoices = (props: Props) => {
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
      field: "cost",
      headerName: "COST",
      flex: 1,
      renderCell: ({ row: { cost } }) => {
        return (
          <Typography variant="h6" color={colors.greenAccent[500]}>
            {cost}
          </Typography>
        );
      },
    },

    {
      field: "date",
      headerName: "DATE",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subTitle=" List of Invoice balances" />
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
            backgroundColor: colors.primary[100],
          },
          "& .MuiDataGrid-footerContainer ": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[500],
          },
          "& .MuiCheckbox-root": {
            color: colors.greenAccent[200],
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Invoices;
