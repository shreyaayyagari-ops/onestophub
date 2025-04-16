import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Account = () => {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="My Details" value="details" />
        <Tab label="Change Password" value="password" />
        <Tab label="Login Activities" value="activities" />
      </Tabs>

      {/* My Details */}
      {activeTab === "details" && (
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {[
            ["Username", "Support"],
            ["First Name", "Support"],
            ["Last Name", "Team"],
            ["Designation", "Support Head"],
            ["Personal Email", "support@payblink.in"],
            ["Official Email", "support@payblink.in"],
            ["Mobile No", "0987654321"],
            ["Last Seen", "15-04-2025 03:40:48 PM"],
            ["Created Date", "03-09-2024 01:00:42 PM"],
          ].map(([label, value], index) => (
            <TextField
              key={index}
              label={label}
              value={value}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2e7d32", // green text
                },
              }}
            />
          ))}
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#2e7d32", // green
              "&:hover": {
                backgroundColor: "#1b5e20",
              },
              color: "#fff",
              width: "fit-content",
            }}
          >
            Submit
          </Button>
        </Box>
      )}

      {/* Change Password */}
      {activeTab === "password" && (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0288d1",
              "&:hover": { backgroundColor: "#01579b" },
            }}
          >
            Send Password Request
          </Button>
        </Box>
      )}

      {/* Login Activities */}
      {activeTab === "activities" && (
        <Box sx={{ mt: 4, overflowX: "auto" }}>
          <Paper>
            <Table size="small">
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Sno</TableCell>
                  <TableCell>IP Address</TableCell>
                  <TableCell>Devices</TableCell>
                  <TableCell>OS</TableCell>
                  <TableCell>Browser</TableCell>
                  <TableCell>Login At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>49.205.254.154</TableCell>
                  <TableCell>System</TableCell>
                  <TableCell>Windows 10</TableCell>
                  <TableCell>Chrome</TableCell>
                  <TableCell>15-04-2025 03:40:43 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default Account;
