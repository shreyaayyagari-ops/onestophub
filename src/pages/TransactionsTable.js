import React from "react";

function TransactionsTable({ fromDate, toDate }) {
  return (
    <div>
      <h4>Transactions</h4>
      <p>
        From: {fromDate} - To: {toDate}
      </p>
    </div>
  );
}

export default TransactionsTable;
