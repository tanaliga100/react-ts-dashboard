import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";

import { PointOfSale } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { mockTransactions } from "../../../data/mockData";
import { tokens } from "../../../theme";
import BarChart from "../../shared/BarChart";
import BumpChart from "../../shared/BumpChart";
import GeoChart from "../../shared/GeographyChart";
import Header from "../../shared/Header";
import PieChart from "../../shared/PieChart";
import ProgressCircle from "../../shared/ProgressCircle";
import StatBox from "../../shared/StatBox";

BarChart;
BumpChart;
PieChart;
GeoChart;
StatBox;
ProgressCircle;
const DashBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: {
                backgroundColor: colors.blueAccent[800],
              },
              color: { color: colors.grey[100] },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID AND CHARTS  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1  */}
        <Box
          gridColumn="span 3"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11, 343"
            subtitle="Emails sent"
            progress=".15"
            increase="+25%"
            icon={
              <EmailIcon
                sx={{
                  color: { color: colors.greenAccent[600] },
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 1  */}
        <Box
          gridColumn="span 3"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="436, 343"
            subtitle="Sails Attain"
            progress="0.25"
            increase="+15%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: { color: colors.greenAccent[600] },
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 1  */}
        <Box
          gridColumn="span 3"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11, 343"
            subtitle=" T - Inbound"
            progress=".15"
            increase="+11%"
            icon={
              <TrafficIcon
                sx={{
                  color: { color: colors.greenAccent[600] },
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 1  */}
        <Box
          gridColumn="span 3"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11, 343"
            subtitle="New Clients"
            progress="0.10"
            increase="+55%"
            icon={
              <PersonAddIcon
                sx={{
                  color: { color: colors.greenAccent[600] },
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* BUMP CHART  */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{
                  color: { color: colors.grey[400] },
                }}
              >
                Revenue Generated
              </Typography>

              <Typography
                variant="h5"
                fontWeight="300"
                sx={{
                  color: { color: colors.greenAccent[500] },
                }}
              >
                $20,546, 123
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: { color: colors.greenAccent[500] },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="230px" ml="10px" p="1rem">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[400]}`}
            p="15px"
            sx={{
              color: { color: colors.grey[400] },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{
                color: { color: colors.grey[400] },
              }}
            >
              Recent Transactions
            </Typography>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "30px",
                    color: { color: colors.greenAccent[500] },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="300"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box
                sx={{
                  color: { color: colors.grey[100] },
                }}
              >
                {transaction.date}
              </Box>

              <Box
                p="5px 10px"
                sx={{
                  backgroundColor: { backgroundColor: colors.greenAccent[500] },
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* END */}
      </Box>
    </Box>
  );
};

export default DashBoard;
