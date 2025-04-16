import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
  Select,
  MenuItem,
  InputBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Technical = () => {
  const [activeTab, setActiveTab] = useState("Merchant Charges");
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    "Merchant Charges",
    "Adjustment Charges",
    "Merchant Gateway Route",
    "Vendor Configuration",
  ];

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#2563eb", // blue-600
      },
      success: {
        main: "#16a34a", // green-600
      },
    },
  });

  const CustomInput = styled(InputBase)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    padding: "6px 8px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="p-4 shadow rounded-md">
        {/* Dark Mode Toggle */}
        {/* <Button
          variant="outlined"
          onClick={() => setDarkMode(!darkMode)}
          sx={{ mb: 2 }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button> */}

        {/* Navigation Tabs */}
        <div className="flex space-x-4 border-b mb-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant="text"
              sx={{
                borderBottom: activeTab === tab ? "2px solid" : "none",
                borderColor: theme.palette.primary.main,
                fontWeight: activeTab === tab ? 600 : 400,
                color:
                  activeTab === tab
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Search and Add Button */}
        <div className="flex items-center mb-4 space-x-4">
          <Select size="small" defaultValue={10}>
            <MenuItem value={10}>10</MenuItem>
          </Select>

          <CustomInput placeholder="Search" />

          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto", height: 36 }}
          >
            Add Merchant Charges
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead>
              <tr>
                {[
                  "Sno",
                  "Merchant Id",
                  "Name",
                  "Company Type",
                  "Created Date",
                  "Action",
                ].map((head) => (
                  <th key={head} className="p-2 border text-left">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">OSH-20{40 + i}</td>
                  <td className="p-2 border">Company {i + 1}</td>
                  <td className="p-2 border">Private Limited</td>
                  <td className="p-2 border">Date</td>
                  <td className="p-2 border">
                    <Button variant="contained" color="primary" size="small">
                      Edit Charges
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Technical;
