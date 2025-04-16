import React, { useState } from "react";
import ChargebackRefund from "../pages/ChargebackRefund";
import TransactionsTable from "../pages/TransactionsTable";
import AdjustmentsTable from "../pages/AdjustmentsTable";
import SettlementData from "../pages/SettlementData";
import { Tab, Tabs } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Button, Typography, Box } from "@mui/material"; // Material UI components
import { styled } from "@mui/system";

function Settlement() {
  const [key, setKey] = useState("chargeback-refund");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const renderDateRange = () => (
    <div className="date-range-picker mb-3">
      <DatePicker
        selected={fromDate}
        onChange={(date) => setFromDate(date)}
        selectsStart
        startDate={fromDate}
        endDate={toDate}
        placeholderText="From Date"
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        className="form-control me-2"
      />
      <DatePicker
        selected={toDate}
        onChange={(date) => setToDate(date)}
        selectsEnd
        startDate={fromDate}
        endDate={toDate}
        placeholderText="To Date"
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        className="form-control"
      />
    </div>
  );

  const formattedFromDate = fromDate
    ? moment(fromDate).format("YYYY-MM-DD")
    : null;
  const formattedToDate = toDate ? moment(toDate).format("YYYY-MM-DD") : null;

  // Styled button using Material UI
  const StyledButton = styled(Button)({
    backgroundColor: "#0062cc", // Custom blue color
    color: "#fff", // Text color white
    "&:hover": {
      backgroundColor: "#004b9f", // Darker blue on hover
    },
  });

  return (
    <div className="container mt-4">
      <Typography variant="h4" color="primary" gutterBottom>
        Settlement
      </Typography>

      {/* Material UI Tabs */}
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        variant="pills"
        fill
      >
        <Tab eventKey="chargeback-refund" title="Chargeback/Refund">
          <ChargebackRefund />
        </Tab>

        {/* New Tab for Settlement Data */}
        <Tab eventKey="settlement-data" title="Settlement Data">
          <SettlementData />
        </Tab>

        <Tab eventKey="transactions" title="Transactions">
          {renderDateRange()}
          <TransactionsTable
            fromDate={formattedFromDate}
            toDate={formattedToDate}
          />
        </Tab>

        <Tab eventKey="adjustments" title="Onestophub Adjustments">
          {renderDateRange()}
          <AdjustmentsTable
            fromDate={formattedFromDate}
            toDate={formattedToDate}
          />
        </Tab>
      </Tabs>

      {/* Material UI Button */}
      <Box sx={{ my: 2 }}>
        <StyledButton
          variant="contained"
          onClick={() => console.log("Action button clicked!")}
        >
          Perform Action
        </StyledButton>
      </Box>
    </div>
  );
}

export default Settlement;
