import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Register chart.js components
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedMerchant, setSelectedMerchant] = useState("Merchant A");

  const handleMerchantChange = (event) => {
    setSelectedMerchant(event.target.value);
  };

  // Info cards data
  const infoBoxes = [
    {
      value: "₹2.5M",
      label: "Total PaySales",
      icon: <TrendingUpIcon fontSize="large" color="primary" />,
    },
    {
      value: "8,200",
      label: "Total Transactions",
      icon: <GroupIcon fontSize="large" color="success" />,
    },
    {
      value: "85%",
      label: "Overall Success Rate",
      icon: <FlashOnIcon fontSize="large" color="warning" />,
    },
    {
      value: "₹1.8M / ₹0.7M",
      label: "PayIn / PayOut",
      icon: <BarChartIcon fontSize="large" color="info" />,
    },
  ];

  // Line chart: Merchant Wire Performance
  const merchantWireData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: `${selectedMerchant} Volume`,
        data: [100, 200, 150, 300],
        borderColor: "#10b981",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  // Bar chart: Transaction Status
  const transactionStatusData = {
    labels: ["Success", "Failed", "Authorized"],
    datasets: [
      {
        label: "Transactions",
        data: [5000, 1000, 2200],
        backgroundColor: ["#10b981", "#ef4444", "#facc15"],
      },
    ],
  };

  // Radar chart: Top Trades
  const topTradesData = {
    labels: ["Merchant A", "Merchant B", "Merchant C", "Merchant D"],
    datasets: [
      {
        label: "Success Rate (%)",
        data: [95, 90, 80, 85],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        pointBackgroundColor: "#3b82f6",
      },
      {
        label: "Volume (k)",
        data: [250, 200, 150, 180],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10b981",
        pointBackgroundColor: "#10b981",
      },
    ],
  };

  // Doughnut chart: VPA Usage
  const vpaUsageData = {
    labels: ["Post VPA", "Present VPA", "Used VPA"],
    datasets: [
      {
        data: [120, 80, 150],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <Box sx={{ p: 2, maxWidth: "100%", margin: "auto" }}>
      {/* Info Cards */}
      <Grid container spacing={2}>
        {infoBoxes.map((box, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined" sx={{ height: "100%", boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  {box.value}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {box.label}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                {box.icon}
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#3b82f6",
                    ":hover": { bgcolor: "#2563eb" },
                  }}
                >
                  More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Merchant Wire Performance */}
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h6">Merchant Wire Performance</Typography>
        <FormControl sx={{ mt: 2, minWidth: 200 }}>
          <InputLabel id="merchant-select-label">Select Merchant</InputLabel>
          <Select
            labelId="merchant-select-label"
            value={selectedMerchant}
            label="Select Merchant"
            onChange={handleMerchantChange}
          >
            <MenuItem value="Merchant A">Merchant A</MenuItem>
            <MenuItem value="Merchant B">Merchant B</MenuItem>
            <MenuItem value="Merchant C">Merchant C</MenuItem>
          </Select>
        </FormControl>
        <div style={{ height: "250px", marginTop: "16px" }}>
          <Line
            data={merchantWireData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </Box>

      {/* Charts Grid */}
      <Grid container spacing={2}>
        {/* Transaction Status - Bar */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Transaction Status
              </Typography>
              <div style={{ height: "250px" }}>
                <Bar
                  data={transactionStatusData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* VPA Usage Stats - Doughnut */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                VPA Usage Stats
              </Typography>
              <div style={{ height: "250px" }}>
                <Doughnut
                  data={vpaUsageData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Trades - Radar */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Top Trades
              </Typography>
              <div style={{ height: "300px" }}>
                <Radar
                  data={topTradesData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
