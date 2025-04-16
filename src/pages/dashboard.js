import React from "react";
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

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "This Week",
        data: [120, 190, 300, 500, 200, 300, 400],
        borderColor: "#3b82f6",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "Last Week",
        data: [100, 150, 250, 400, 180, 280, 350],
        borderColor: "#9ca3af",
        backgroundColor: "transparent",
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Electronics", "Clothing", "Home", "Toys", "Books"],
    datasets: [
      {
        label: "Sales",
        data: [400, 600, 300, 500, 250],
        backgroundColor: "#6366f1",
      },
    ],
  };

  const doughnutData = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [
      {
        data: [350, 150, 200],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        hoverOffset: 10,
      },
    ],
  };

  const radarData = {
    labels: ["Speed", "Stability", "Reach", "Quality", "Engagement"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 90, 81, 56],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        pointBackgroundColor: "#3b82f6",
      },
    ],
  };

  const infoBoxes = [
    {
      value: "53%",
      label: "Bounce Rate",
      icon: <TrendingUpIcon fontSize="large" color="primary" />,
    },
    {
      value: "1,200",
      label: "New Users",
      icon: <GroupIcon fontSize="large" color="success" />,
    },
    {
      value: "75%",
      label: "Conversion Rate",
      icon: <FlashOnIcon fontSize="large" color="warning" />,
    },
    {
      value: "8,540",
      label: "Page Views",
      icon: <BarChartIcon fontSize="large" color="info" />,
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Info Cards */}
      <Grid container spacing={2}>
        {infoBoxes.map((box, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h4" color="primary" gutterBottom>
                  {box.value}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {box.label}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                {box.icon}
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ bgcolor: "#3b82f6", ":hover": { bgcolor: "#2563eb" } }}
                >
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Online Store Visitors
              </Typography>
              <div style={{ height: "300px" }}>
                <Line
                  data={lineData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sales by Category
              </Typography>
              <div style={{ height: "300px" }}>
                <Bar data={barData} options={{ maintainAspectRatio: false }} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Traffic Sources
              </Typography>
              <div style={{ height: "300px" }}>
                <Doughnut
                  data={doughnutData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Performance Metrics
              </Typography>
              <div style={{ height: "300px" }}>
                <Radar
                  data={radarData}
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
