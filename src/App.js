import { mockLabelErrorsData } from "./api/labelErrorsApi";

import "./App.css";

function App() {
  // Column headers
  const tableHeaders = Object.keys(mockLabelErrorsData[0]);

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
        {mockLabelErrorsData &&
          mockLabelErrorsData.map((e) => (
            <tr key={e.id}>
              {tableHeaders.map((header, index) => (
                <td key={e[header] + index}>{e[header]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default App;
