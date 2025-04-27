import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  useMediaQuery,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LuLayoutDashboard, LuSquareAsterisk } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GoTag } from "react-icons/go";
import { GiRelationshipBounds } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import {
  MdOutlineSupervisorAccount,
  MdOutlineMan,
  MdOutlineSystemUpdateAlt,
} from "react-icons/md";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard" },
    {
      label: "Transactions",
      icon: <GrTransaction />,
      path: "/transactions",
      subItems: [{ label: "Transaction Items", path: "/transactions/items" }],
    },
    { label: "Settlement", icon: <FaRegHandshake />, path: "/settlement" },
    {
      label: "Technical",
      icon: <HiOutlineWrenchScrewdriver />,
      path: "/technical",
    },
    { label: "Sales", icon: <GoTag />, path: "/sales" },
    {
      label: "Risk and Compliance",
      icon: <LuSquareAsterisk />,
      path: "/risk-compliance",
    },
    { label: "Merchant", icon: <GiRelationshipBounds />, path: "/merchant" },
    { label: "Payout", icon: <MdOutlineSupervisorAccount />, path: "/payout" },
    { label: "Reseller", icon: <MdOutlineMan />, path: "/reseller" },
    {
      label: "Payout Reseller",
      icon: <MdOutlineSupervisorAccount />,
      path: "/payout-reseller",
    },
    {
      label: "Transaction Update",
      icon: <MdOutlineSystemUpdateAlt />,
      path: "/transaction-update",
    },
    { label: "Account", icon: <CiLogout />, path: "/account" },
  ];

  const drawerContent = (
    <Box
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      sx={{ width: isOpen ? 240 : 60 }}
    >
      <nav className="sidebar-nav">
        {menuItems.map(({ label, icon, path, subItems }) => {
          const isActive = currentPath === path;
          return (
            <React.Fragment key={label}>
              <Link
                to={path}
                className={`sidebar-link ${
                  currentPath.startsWith(path) ? "active" : ""
                }`}
                onClick={isMobile ? toggleDrawer : undefined}
              >
                <span className="icon">{icon}</span>
                {isOpen && <span className="label">{label}</span>}
              </Link>

              {isOpen && subItems && isActive && (
                <div className="sidebar-subitems">
                  {subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className={`sidebar-sublink ${
                        currentPath === subItem.path ? "active" : ""
                      }`}
                      onClick={isMobile ? toggleDrawer : undefined}
                    >
                      <span className="label">{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </Box>
  );

  return isMobile ? (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      {drawerContent}
    </Drawer>
  ) : (
    drawerContent
  );
};

export default Sidebar;
