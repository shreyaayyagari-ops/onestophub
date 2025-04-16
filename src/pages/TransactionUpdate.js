import React, { useState } from "react";
import { Box, Tabs, Tab, TextField, Button, Typography } from "@mui/material";

const TransactionUpdate = () => {
  const [activeTab, setActiveTab] = useState("utr");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "utr":
        return (
          <Box p={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#4B5563", mb: 1 }}
            >
              UTR: <span style={{ color: "#ef4444" }}>*</span>
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField variant="outlined" size="small" sx={{ width: 250 }} />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2563eb", // blue-600
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1e40af",
                  },
                }}
              >
                Status
              </Button>
            </Box>
          </Box>
        );
      case "update":
        return (
          <Box p={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1e40af",
                },
              }}
            >
              Update Transaction
            </Button>
          </Box>
        );
      case "status":
        return (
          <Box p={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1e40af",
                },
              }}
            >
              Get Update Transaction
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 2,
        maxWidth: "800px",
        mx: "auto",
        mt: 4,
        bgcolor: "white",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Transaction tabs"
        variant="fullWidth"
        sx={{
          borderBottom: "1px solid #e5e7eb",
          "& .MuiTab-root": {
            color: "#10b981", // Tailwind green-500
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#000000",
          },
        }}
      >
        <Tab label="UTR Status" value="utr" />
        <Tab label="Update Transaction" value="update" />
        <Tab label="Transaction Status" value="status" />
      </Tabs>
      {renderTabContent()}
    </Box>
  );
};

export default TransactionUpdate;
