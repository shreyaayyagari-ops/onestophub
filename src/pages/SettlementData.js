import React, { useState } from "react";
import {
  Table,
  Button,
  TextField,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import { styled } from "@mui/system";

// Styled components for Material UI
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
  "& .MuiInputBase-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiFormLabel-root": {
    color: theme.palette.text.secondary,
  },
}));

const SettlementData = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    if (date > endDate) setEndDate(date); // Prevent invalid range
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    if (date < startDate) setStartDate(date);
    setEndDate(date);
  };

  const renderDateRange = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      <Grid container spacing={2} style={{ maxWidth: "600px" }}>
        <Grid item xs={6}>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="dd/MM/yyyy HH:mm:ss"
            className="form-control"
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="dd/MM/yyyy HH:mm:ss"
            className="form-control"
          />
        </Grid>
      </Grid>
    </div>
  );

  const noDataMessage = (
    <tr>
      <td colSpan="5" className="text-center">
        No Data found
      </td>
    </tr>
  );

  return (
    <div style={{ padding: "24px" }}>
      {renderDateRange()}

      <div style={{ marginBottom: "16px" }}>
        <CustomTextField
          label="Search..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <CustomButton variant="outlined" size="small">
                <FaSearch />
              </CustomButton>
            ),
          }}
        />
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Typography variant="h6" color="primary">
                S.No
              </Typography>
            </th>
            <th>
              <Typography variant="h6" color="primary">
                Merchant ID
              </Typography>
            </th>
            <th>
              <Typography variant="h6" color="primary">
                Transaction ID
              </Typography>
            </th>
            <th>
              <Typography variant="h6" color="primary">
                Amount
              </Typography>
            </th>
            <th>
              <Typography variant="h6" color="primary">
                Settlement Date
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>{noDataMessage}</tbody>
      </Table>

      <Pagination
        count={1}
        page={1}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        color="primary"
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      />
    </div>
  );
};

export default SettlementData;
