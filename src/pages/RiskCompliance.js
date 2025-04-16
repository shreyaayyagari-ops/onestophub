import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const RiskCompliance = () => {
  const [activeTab, setActiveTab] = useState("merchantDocument");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabList = [
    { label: "Merchant Document", value: "merchantDocument" },
    { label: "Merchant Extra Document", value: "merchantExtraDocument" },
    { label: "Background Verification", value: "backgroundVerification" },
    { label: "Banned Products", value: "bannedProducts" },
    { label: "Grievance Cell", value: "grievanceCell" },
  ];

  const renderTable = () => {
    const renderNoData = () => (
      <TableRow>
        <TableCell colSpan={8} align="center">
          <Typography variant="body2" color="text.secondary">
            No data available.
          </Typography>
        </TableCell>
      </TableRow>
    );

    switch (activeTab) {
      case "merchantDocument":
      case "merchantExtraDocument":
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  {[
                    "Sno",
                    "Merchant Id",
                    "Name",
                    "Company Name",
                    "Company Type",
                    "Status",
                    "Created Date",
                    "Action",
                  ].map((heading, index) => (
                    <TableCell
                      key={index}
                      sx={{ fontWeight: "bold", color: "#374151" }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{renderNoData()}</TableBody>
            </Table>
          </TableContainer>
        );

      case "backgroundVerification":
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  {[
                    "Sno",
                    "Merchant Name",
                    "Email",
                    "Tele Verification",
                    "Company Type",
                    "Website Exists",
                    "Ban Product",
                    "Created At",
                  ].map((heading, index) => (
                    <TableCell
                      key={index}
                      sx={{ fontWeight: "bold", color: "#374151" }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{renderNoData()}</TableBody>
            </Table>
          </TableContainer>
        );

      case "bannedProducts":
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "#374151" }}>
                    Sno
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#374151" }}>
                    Category
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#374151" }}>
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Fake Products</TableCell>
                  <TableCell>
                    Items that violate authenticity standards
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Illegal Drugs</TableCell>
                  <TableCell>Substances prohibited by law</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        );

      case "grievanceCell":
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  {[
                    "Sno",
                    "Case Id",
                    "Payment Id",
                    "Amount",
                    "Customer Name",
                    "Reason",
                    "Status",
                    "Case Created Date",
                  ].map((heading, index) => (
                    <TableCell
                      key={index}
                      sx={{ fontWeight: "bold", color: "#374151" }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <Typography
                      color="primary"
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      case_Bl5w4BmhQDJ90u6V
                    </Typography>
                  </TableCell>
                  <TableCell>YBB015rMe0m8l2h1l31Xh4ZC</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>test</TableCell>
                  <TableCell>Rajat</TableCell>
                  <TableCell>open</TableCell>
                  <TableCell>13-10-2022 01:24:18 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {tabList.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            sx={{
              fontWeight: "bold",
              color:
                activeTab === tab.value ? "primary.main" : "text.secondary",
              backgroundColor:
                activeTab === tab.value ? "primary.light" : "transparent",
              borderRadius: 1,
              mx: 0.5,
            }}
          />
        ))}
      </Tabs>

      {/* Table */}
      <Box>{renderTable()}</Box>

      {/* Example Action Button */}
      <Box mt={4}>
        <Button variant="contained" color="secondary">
          Add Merchant
        </Button>
      </Box>
    </Box>
  );
};

export default RiskCompliance;
