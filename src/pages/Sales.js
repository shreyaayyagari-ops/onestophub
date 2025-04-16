import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Sales = () => {
  const merchants = [
    { id: "OSH-2052", name: "ADU", date: "2025-02-20 11:18:08 AM" },
    {
      id: "OSH-2028",
      name: "AMVITECH SOFTWARES PRIVATE LIMITED",
      date: "2024-12-09 10:15:03 AM",
    },
    { id: "OSH-2051", name: "Atopos", date: "2025-02-20 10:25:31 AM" },
    {
      id: "OSH-2044",
      name: "Birdbox services private limited",
      date: "2024-12-16 08:47:52 PM",
    },
    { id: "OSH-2054", name: "Fisher", date: "2025-02-23 12:03:24 PM" },
    {
      id: "OSH-2035",
      name: "GAMENINJA SOLUTIONS PRIVATE LIMITED",
      date: "2024-12-03 11:54:04 AM",
    },
    { id: "OSH-2047", name: "Hujing", date: "2024-12-25 04:37:30 PM" },
    { id: "OSH-2049", name: "Martin", date: "2025-02-20 11:01:42 AM" },
    { id: "OSH-2053", name: "Michael", date: "2025-02-20 11:31:56 AM" },
  ];

  return (
    <Box p={2}>
      <Paper elevation={3}>
        <Box bgcolor="#f5f5f5" p={2} borderBottom={1} borderColor="divider">
          <Button variant="contained" color="inherit">
            <Typography fontWeight={600} color="text.primary">
              Merchant Commercial
            </Typography>
          </Button>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead sx={{ backgroundColor: "#e0e0e0" }}>
              <TableRow>
                {[
                  "Sno",
                  "Merchant Id",
                  "Name",
                  "Company Type",
                  "Created Date",
                  "Action",
                ].map((head) => (
                  <TableCell key={head}>
                    <Typography fontWeight="bold" color="text.secondary">
                      {head}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {merchants.map((merchant, index) => (
                <TableRow key={merchant.id} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{merchant.id}</TableCell>
                  <TableCell>{merchant.name}</TableCell>
                  <TableCell>Private Limited</TableCell>
                  <TableCell>{merchant.date}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#fb8c00",
                          "&:hover": { backgroundColor: "#ef6c00" },
                        }}
                      >
                        View Charges
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#1976d2",
                          "&:hover": { backgroundColor: "#115293" },
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#d32f2f",
                          "&:hover": { backgroundColor: "#b71c1c" },
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Sales;
