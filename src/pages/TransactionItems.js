import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";

const TransactionItems = () => {
  const [key, setKey] = useState("transactions");
  const [file, setFile] = useState(null);

  const handleTabChange = (event, newValue) => {
    setKey(newValue);
  };

  const formControlStyle = { minWidth: 120, width: "100%", mb: 2 };
  const labelStyle = { color: "#4a148c", fontWeight: "bold", mb: 1 };
  const inputStyle = { color: "#1a237e" };

  return (
    <Box p={3}>
      <Tabs
        value={key}
        onChange={handleTabChange}
        aria-label="Transaction Tabs"
      >
        <Tab label="Transactions" value="transactions" />
        <Tab label="Backup Transaction" value="backup" />
        <Tab label="Update Transaction" value="update" />
        <Tab label="Search" value="search" />
        <Tab label="Transaction Download" value="download" />
      </Tabs>

      {/* Transactions Tab */}
      {key === "transactions" && (
        <Box mt={3}>
          <Box display="flex" gap={2} mb={3}>
            <TextField
              fullWidth
              label="Search"
              InputProps={{ sx: inputStyle }}
            />
            <TextField
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>

          <Box border={1} borderColor="#ddd" borderRadius={1} p={2}>
            <Typography color="textSecondary">No Data found</Typography>
          </Box>
        </Box>
      )}

      {/* Backup Transaction */}
      {key === "backup" && (
        <Box mt={3} display="flex" gap={2}>
          <TextField type="date" fullWidth InputLabelProps={{ shrink: true }} />
          <TextField placeholder="Search" fullWidth />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#00897b", color: "white" }}
          >
            <FaSearch />
          </Button>
        </Box>
      )}

      {/* Update Transaction */}
      {key === "update" && (
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{ mb: 2, backgroundColor: "#3949ab" }}
          >
            Update Transaction Create
          </Button>
          <Box border={1} borderColor="#ccc" borderRadius={2} p={3}>
            <Typography sx={labelStyle}>Bulk File Upload</Typography>
            <input
              type="file"
              accept=".xls,.xlsx"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ marginBottom: "1rem" }}
            />
            <Box display="flex" gap={2}>
              <FormControl sx={formControlStyle}>
                <InputLabel>--Select--</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="success">
                Upload
              </Button>
              <Button variant="contained" color="error">
                Reset
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* Search */}
      {key === "search" && (
        <Box mt={3} display="flex" gap={2} alignItems="center">
          <FormControl sx={formControlStyle}>
            <InputLabel>Search For</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">--Select--</MenuItem>
            </Select>
          </FormControl>
          <TextField label="UTR" fullWidth />
          <Button variant="contained" color="primary">
            <FaSearch />
          </Button>
        </Box>
      )}

      {/* Download */}
      {key === "download" && (
        <Box mt={3} display="flex" gap={2}>
          <FormControl sx={formControlStyle}>
            <InputLabel>Merchant Id</InputLabel>
            <Select defaultValue="3Qpay services private limited">
              <MenuItem value="3Qpay services private limited">
                3Qpay services private limited
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Date"
            fullWidth
            value="15/04/2025 - 15/04/2025"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TransactionItems;
