import React from "react";

function AdjustmentsTable({ fromDate, toDate }) {
  return (
    <div>
      <h4>Adjustments</h4>
      <p>
        From: {fromDate} - To: {toDate}
      </p>
    </div>
  );
}

export default AdjustmentsTable;
