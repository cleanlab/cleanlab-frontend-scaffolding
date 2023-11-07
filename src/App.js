import { useState } from "react";

import { mockLabelErrorsData } from "./api/labelErrorsApi";

import "./App.css";

function App() {
  // Data to be shown in the table
  const [tableData, setTableData] = useState(mockLabelErrorsData);

  // Column headers
  const tableHeaders = Object.keys(tableData[0]);

  // Basic table scaffolding -- feel free to change whatever you like
  return (
    <table>
      <thead>
        {/* Table column headers */}
        {tableHeaders.map((e) => (
          <th key={e}>{e}</th>
        ))}
      </thead>
      <tbody>
        {/* Table rows */}
        {tableData.map((e) => (
          <tr></tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
