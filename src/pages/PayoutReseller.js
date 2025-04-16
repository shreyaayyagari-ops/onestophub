import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";

const PayoutReseller = () => {
  const [tab, setTab] = useState("mapping");
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const renderContent = () => {
    switch (tab) {
      case "mapping":
        return (
          <Box p={2}>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
              <Typography fontWeight={600} color="text.primary">
                Reseller:{" "}
                <Typography component="span" color="error">
                  *
                </Typography>
              </Typography>
              <FormControl size="small">
                <Select defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
              <Typography fontWeight={600} color="text.primary">
                Merchant:{" "}
                <Typography component="span" color="error">
                  *
                </Typography>
              </Typography>
              <FormControl size="small">
                <Select defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Map Merchant
            </Button>
          </Box>
        );

      case "price":
        return (
          <Box p={2}>
            <Typography fontWeight={600} color="text.primary">
              Merchant:{" "}
              <Typography component="span" color="error">
                *
              </Typography>
            </Typography>
            <FormControl size="small" sx={{ ml: 2 }}>
              <Select defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );

      case "credits":
        return (
          <Box p={2}>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
              <Typography fontWeight={600} color="text.primary">
                Merchant Id:
              </Typography>
              <FormControl size="small">
                <Select defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
              <Typography fontWeight={600} color="text.primary">
                Date:
              </Typography>
              <TextField
                size="small"
                value="14/04/2025 23:17:15 - 14/04/2025 23:17:15"
                InputProps={{ readOnly: true }}
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none" }}
            >
              Submit
            </Button>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box border={1} borderRadius={2} borderColor="grey.300">
      <Tabs
        value={tab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Payout Merchant Mapping" value="mapping" />
        <Tab label="Payout Price Setting" value="price" />
        <Tab label="Credits" value="credits" />
      </Tabs>
      {renderContent()}
    </Box>
  );
};

export default PayoutReseller;
