// App.js
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "../src/css/dashboard.css";
import "../src/css/login.css";
import "../src/css/transaction.css";
import "../src/css/Header.css";

// Components
import Header from "./components/Header";
import Sidebar from "./components/sideBar";

// Pages
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/Transactions";
import ChargebackRefund from "./pages/ChargebackRefund";
import TransactionItems from "./pages/TransactionItems";
import Settlement from "./pages/Settlement";
import SettlementData from "./pages/SettlementData";
import Technical from "./pages/Technical";
import Sales from "./pages/Sales";
import RiskCompliance from "./pages/RiskCompliance";
import Merchant from "./pages/Merchant";
import Payout from "./pages/Payout";
import Reseller from "./pages/Reseller";
import PayoutReseller from "./pages/PayoutReseller";
import TransactionUpdate from "./pages/TransactionUpdate";
import Account from "./pages/Account";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import Layout from "./pages/Layout";
import TransactionSubPage from "./pages/TransactionSubPages";
import PayoutDashboard from "./pages/DashboardTab";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0062cc",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    document.body.className = isLoginPage ? "login-body" : "";
  }, [isLoginPage]);

  return (
    <>
      {!isLoginPage && <Header />}
      <div className="d-flex">
        {!isLoginPage && <Sidebar isOpen={true} />}
        <div
          className="flex-grow-1 p-3"
          style={{
            marginLeft: !isLoginPage ? "250px" : "0",
            width: !isLoginPage ? "auto" : "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/items" element={<TransactionItems />} />
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/risk-compliance" element={<RiskCompliance />} />
            <Route path="/merchant" element={<Merchant />} />
            <Route
              path="/merchant/transactions"
              element={<TransactionSubPage />}
            />
            <Route path="/payout" element={<Payout />} />
            <Route path="/payout/dashboard" element={<PayoutDashboard />} />
            <Route path="/reseller" element={<Reseller />} />
            <Route path="/payout-reseller" element={<PayoutReseller />} />
            <Route path="/transaction-update" element={<TransactionUpdate />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/settlement/chargeback-refund"
              element={<ChargebackRefund />}
            />
            <Route
              path="/settlement/settlement-data"
              element={<SettlementData />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
