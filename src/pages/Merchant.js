import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { FaEdit, FaEye } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const Merchant = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("cases");

  // Update tab if URL has subpage
  useEffect(() => {
    if (location.pathname === "/merchant/transactions") {
      setActiveTab("transactions");
    }
  }, [location.pathname]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
    if (newValue === "transactions") {
      navigate("/merchant/transactions");
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Merchant Cases" value="cases" />
        <Tab label="Merchant Gateway Route" value="gateway" />
        <Tab label="Merchant Details" value="details" />
        <Tab label="Adjustments" value="adjustments" />
        <Tab label="Transactions" value="transactions" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === "cases" && (
          <>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Sno</TableCell>
                    <TableCell>Case Id</TableCell>
                    <TableCell>Transaction Id</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Merchant</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Case data rows */}</TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography>Showing 0 to 0 of 0 entries</Typography>
              <Box>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                  Previous
                </Button>
                <Button variant="contained" size="small" sx={{ mr: 1 }}>
                  1
                </Button>
                <Button variant="outlined" size="small">
                  Next
                </Button>
              </Box>
            </Box>
          </>
        )}

        {activeTab === "gateway" && (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Select size="small" defaultValue={10}>
                <MenuItem value={10}>10</MenuItem>
              </Select>

              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField size="small" placeholder="Search" />
                <IconButton color="primary">
                  <SearchIcon />
                </IconButton>
                <Button variant="contained" color="success">
                  Add Merchant Route
                </Button>
              </Box>
            </Box>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Sno</TableCell>
                    <TableCell>Merchant Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UPI Route</TableCell>
                    <TableCell>Company Type</TableCell>
                    <TableCell>Created Date</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Gateway data rows */}</TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {activeTab === "details" && (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Button variant="contained" color="primary">
                Add Merchant
              </Button>
              <TextField
                size="small"
                placeholder="Search for Name/email Only..."
              />
            </Box>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Sno</TableCell>
                    <TableCell>Merchant Id</TableCell>
                    <TableCell>Merchant Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Created Date</TableCell>
                    <TableCell>Last Login</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Details data */}</TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {activeTab === "adjustments" && (
          <>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>Sno</TableCell>
                    <TableCell>Adjustment Id</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Fee</TableCell>
                    <TableCell>Tax</TableCell>
                    <TableCell>Created Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No Data found
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography>Showing 0 to 0 of 0 entries</Typography>
              <Box>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                  Previous
                </Button>
                <Button variant="contained" size="small" sx={{ mr: 1 }}>
                  1
                </Button>
                <Button variant="outlined" size="small">
                  Next
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Merchant;
