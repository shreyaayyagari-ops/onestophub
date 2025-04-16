import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const Reseller = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reseller Management
      </Typography>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="scrollable"
      >
        <Tab label="Create Reseller" />
        <Tab label="Merchant Mapping" />
        <Tab label="Price Setting" />
        <Tab label="Commission" />
        <Tab label="Commission Charge Details" />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Reseller Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Address" fullWidth />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained">Create</Button>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Reseller ID" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Merchant ID" fullWidth />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained">Map</Button>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Product ID" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Reseller Price" fullWidth />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained">Set Price</Button>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={activeTab} index={3}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Reseller ID" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Commission (%)" fullWidth />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained">Set Commission</Button>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={activeTab} index={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Transaction ID" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Charge Amount" fullWidth />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
    </Box>
  );
};

export default Reseller;
