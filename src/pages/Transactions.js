import React from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FaEdit, FaEye } from "react-icons/fa";

const Transactions = ({ transactions = [] }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Transactions
          </Typography>
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "S.No",
                  "Transaction Id",
                  "UTR",
                  "Merchant Name",
                  "User Name",
                  "Email",
                  "Phone",
                  "Amount",
                  "Payment Amount",
                  "Udf1",
                  "Date",
                  "Action",
                ].map((heading) => (
                  <TableCell
                    key={heading}
                    sx={{ fontWeight: "bold", color: "#424242" }}
                  >
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.length > 0 ? (
                transactions.map((txn, index) => (
                  <TableRow key={txn.transactionId || index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{txn.transactionId}</TableCell>
                    <TableCell>{txn.utr}</TableCell>
                    <TableCell>{txn.merchantName}</TableCell>
                    <TableCell>{txn.userName}</TableCell>
                    <TableCell>{txn.email}</TableCell>
                    <TableCell>{txn.phone}</TableCell>
                    <TableCell>{txn.amount}</TableCell>
                    <TableCell>{txn.paymentAmount}</TableCell>
                    <TableCell>{txn.udf1}</TableCell>
                    <TableCell>{new Date(txn.date).toLocaleString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        sx={{ minWidth: "32px", marginRight: 1 }}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="contained"
                        color="info"
                        size="small"
                        sx={{ minWidth: "32px", color: "#fff" }}
                      >
                        <FaEye />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={12} align="center">
                    No transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Transactions;
