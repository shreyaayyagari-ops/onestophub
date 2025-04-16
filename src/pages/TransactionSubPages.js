import React from "react";
import {
  Box,
  Container,
  Paper,
  Tabs,
  Tab,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
  Pagination,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";

const TransactionSubPage = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [dateRange, setDateRange] = React.useState([
    dayjs("2025-04-16T00:00:00"),
    dayjs("2025-04-16T23:59:59"),
  ]);
  const [page, setPage] = React.useState(1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setPage(1); // reset pagination on tab switch
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const tabHeaders = [
    [
      "Sno",
      "Merchant Name",
      "Merchant Id",
      "No Of Successful Transaction",
      "No Of Failed Transaction",
      "No Of Authorized Transaction",
      "No Of Other Transaction",
      "Total No Of Transactions",
    ],
    [
      "Sno",
      "Merchant Name",
      "Merchant Id",
      "Transactions Amount",
      "Transactions Charged Amount",
      "Transactions GST Amount",
      "Total Charged Amount",
      "Total Adjustment Amount",
    ],
    [
      "Sno",
      "Merchant Name",
      "Merchant Id",
      "Total No Of Transactions",
      "No Of Successful Transaction",
      "No Of Unsuccessful Transaction",
      "Success Ratio Authorized",
      "Initiated Amount",
      "Pay Amount",
    ],
  ];

  // Sample mock data per tab
  const mockData = [
    [
      {
        Sno: 1,
        "Merchant Name": "Alpha Store",
        "Merchant Id": "M001",
        "No Of Successful Transaction": 30,
        "No Of Failed Transaction": 5,
        "No Of Authorized Transaction": 28,
        "No Of Other Transaction": 2,
        "Total No Of Transactions": 65,
      },
    ],
    [
      {
        Sno: 1,
        "Merchant Name": "Beta Traders",
        "Merchant Id": "M002",
        "Transactions Amount": "₹50,000",
        "Transactions Charged Amount": "₹1,500",
        "Transactions GST Amount": "₹270",
        "Total Charged Amount": "₹1,770",
        "Total Adjustment Amount": "₹100",
      },
    ],
    [
      {
        Sno: 1,
        "Merchant Name": "Gamma Mart",
        "Merchant Id": "M003",
        "Total No Of Transactions": 80,
        "No Of Successful Transaction": 70,
        "No Of Unsuccessful Transaction": 10,
        "Success Ratio Authorized": "87.5%",
        "Initiated Amount": "₹75,000",
        "Pay Amount": "₹70,000",
      },
    ],
  ];

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        <Paper elevation={2} sx={{ p: 2 }}>
          {/* Tabs */}
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
            sx={{
              "& .Mui-selected": {
                color: "#84c225 !important",
                fontWeight: 600,
              },
            }}
          >
            <Tab label="No Of Transactions" />
            <Tab label="Total Transactions Amount" />
            <Tab label="Transaction Report" />
          </Tabs>

          {/* Date Picker */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker
                calendars={1}
                value={dateRange}
                onChange={(newValue) => setDateRange(newValue)}
                slots={{
                  textField: ({ inputRef, inputProps, InputProps }) => (
                    <TextField
                      inputRef={inputRef}
                      inputProps={inputProps}
                      size="small"
                      fullWidth
                      InputProps={{
                        ...InputProps,
                        endAdornment: (
                          <IconButton color="primary">
                            <CalendarTodayIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  ),
                }}
              />
            </LocalizationProvider>
          </Box>

          {/* Table */}
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {tabHeaders[tabValue].map((header) => (
                    <TableCell key={header}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {mockData[tabValue].length > 0 ? (
                  mockData[tabValue].map((row, index) => (
                    <TableRow key={index}>
                      {tabHeaders[tabValue].map((header) => (
                        <TableCell key={header}>{row[header]}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={tabHeaders[tabValue].length}
                      align="center"
                    >
                      No Data found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography fontSize="14px">
              Showing {mockData[tabValue].length > 0 ? 1 : 0} to{" "}
              {mockData[tabValue].length} of {mockData[tabValue].length} entries
            </Typography>
            <Pagination
              count={1}
              page={page}
              size="small"
              onChange={handlePageChange}
            />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default TransactionSubPage;
