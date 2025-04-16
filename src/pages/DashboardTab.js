import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardTab = () => {
  const dashboardItems = [
    {
      label: "Total Transactions",
      value: "₹5,43,234",
      icon: (
        <TrendingUpIcon
          sx={{ fontSize: { xs: 28, sm: 36 }, color: "primary.main" }}
        />
      ),
      color: "#e3f2fd",
    },
    {
      label: "Total Settlements",
      value: "₹3,12,400",
      icon: (
        <TrendingDownIcon
          sx={{ fontSize: { xs: 28, sm: 36 }, color: "secondary.main" }}
        />
      ),
      color: "#fce4ec",
    },
    {
      label: "Pending Transactions",
      value: "₹89,430",
      icon: (
        <AccountBalanceWalletIcon
          sx={{ fontSize: { xs: 28, sm: 36 }, color: "#ff9800" }}
        />
      ),
      color: "#fff3e0",
    },
    {
      label: "Total Refunds",
      value: "₹41,200",
      icon: (
        <CurrencyRupeeIcon
          sx={{ fontSize: { xs: 28, sm: 36 }, color: "#4caf50" }}
        />
      ),
      color: "#e8f5e9",
    },
  ];

  const chartData = [
    { name: "Jan", Transactions: 54000, Settlements: 32000 },
    { name: "Feb", Transactions: 48000, Settlements: 30000 },
    { name: "Mar", Transactions: 60000, Settlements: 35000 },
    { name: "Apr", Transactions: 58000, Settlements: 37000 },
    { name: "May", Transactions: 61000, Settlements: 39000 },
    { name: "Jun", Transactions: 62000, Settlements: 41000 },
    { name: "Jul", Transactions: 64000, Settlements: 43000 },
  ];

  return (
    <Box sx={{ mt: { xs: 2, sm: 3 }, px: { xs: 1.5, sm: 3 } }}>
      <Typography variant="h5" sx={{ mb: { xs: 2, sm: 3 } }}>
        Payout Dashboard Overview
      </Typography>

      <Grid container spacing={2}>
        {dashboardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: item.color,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                  <Box>{item.icon}</Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: { xs: 3, sm: 4 } }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Monthly Transactions vs Settlements
      </Typography>
      <Card sx={{ p: { xs: 1, sm: 2 }, borderRadius: 3 }}>
        <Box sx={{ width: "100%", height: { xs: 250, sm: 300 } }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Transactions"
                stroke="#1976d2"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Settlements"
                stroke="#9c27b0"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default DashboardTab;
