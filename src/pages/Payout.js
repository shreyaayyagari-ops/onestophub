import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import DashboardTab from "./DashboardTab";

const Payout = () => {
  const [key, setKey] = useState("dashboard"); // 👈 Default to dashboard for now
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleTabChange = (event, newValue) => setKey(newValue);
  const handleEditShow = () => setShowEditModal(true);
  const handleEditClose = () => setShowEditModal(false);
  const handleDeleteShow = () => setShowDeleteModal(true);
  const handleDeleteClose = () => setShowDeleteModal(false);

  return (
    <Box sx={{ p: 3 }}>
      <Tabs
        value={key}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons
      >
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="vendor" label="Vendor Config" />
        <Tab value="routing" label="Routing Configuration" />
        <Tab value="price" label="Price Settings" />
      </Tabs>

      {key === "dashboard" && <DashboardTab />}
      {key === "vendor" && (
        <Box sx={{ border: "1px solid #ccc", p: 2, mt: 2 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Vendor</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">--Select--</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary">
              Add Vendor Api Keys
            </Button>
          </Box>
        </Box>
      )}

      {key === "routing" && (
        <Box sx={{ border: "1px solid #ccc", p: 2, mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" sx={{ color: "#00796b" }}>
              Routing Configuration
            </Typography>
            <Button variant="contained" color="primary">
              Add Routing Configuration
            </Button>
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Merchant</TableCell>
                <TableCell>Imps</TableCell>
                <TableCell>Neft</TableCell>
                <TableCell>Rtgs</TableCell>
                <TableCell>Upi</TableCell>
                <TableCell>Paytm</TableCell>
                <TableCell>Amazon</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(4)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {
                      [
                        "OneStop Shopping",
                        "RUDRAXEE...",
                        "TECHRIUS...",
                        "GAMENINJA...",
                      ][index]
                    }
                  </TableCell>
                  {Array(6)
                    .fill("Cyro")
                    .map((val, i) => (
                      <TableCell key={i}>{val}</TableCell>
                    ))}
                  <TableCell>06-12-2024 10:45:18</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={handleDeleteShow}
                    >
                      🗑
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      onClick={handleEditShow}
                    >
                      ✎
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

      {key === "price" && (
        <Box sx={{ border: "1px solid #ccc", p: 2, mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" sx={{ color: "#6a1b9a" }}>
              Price Settings
            </Typography>
            <Button variant="contained" color="primary">
              Add Price Settings
            </Button>
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Merchant Gid</TableCell>
                <TableCell>Merchant Name</TableCell>
                <TableCell>No of Settings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ["OSH-2021", "OneStop Shopping"],
                ["OSH-2024", "RUDRAXEE ENTERPRISES PRIVATE LIMITED"],
              ].map(([gid, name], i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{gid}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell sx={{ color: "green" }}>2</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

      {/* Edit Dialog */}
      <Dialog
        open={showEditModal}
        onClose={handleEditClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ backgroundColor: "#ffe082" }}>
          Edit Routing Configuration
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            {["IMPS", "NEFT", "RTGS", "UPI", "PAYTM", "AMAZON"].map(
              (item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <FormControl fullWidth>
                    <InputLabel>{item} *</InputLabel>
                    <Select defaultValue="Cyro">
                      <MenuItem value="Cyro">Cyro</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleEditClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={showDeleteModal} onClose={handleDeleteClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this routing configuration?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Payout;
