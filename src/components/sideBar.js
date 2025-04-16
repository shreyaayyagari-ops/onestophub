import React from "react";
import { Link, useLocation } from "react-router-dom";
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

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useMediaQuery } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IoMenu } from "react-icons/io5"; // Icon for the open/close button

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useMediaQuery("(max-width:768px)");

  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const handleSubMenuToggle = () => {
    setOpenSubMenu((prev) => !prev);
  };

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

  return (
    <div className="relative">
      {/* Mobile Sidebar Toggle Button */}
      {isMobile && !isOpen && (
        <button
          className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
          onClick={() => toggleDrawer(true)}
        >
          <IoMenu size={24} />
        </button>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {menuItems.map(({ label, icon, path, subItems }) => {
            const isActive = currentPath.startsWith(path);

            return (
              <React.Fragment key={label}>
                <ListItemButton
                  component={Link}
                  to={path}
                  selected={isActive}
                  onClick={() => {
                    if (isMobile) toggleDrawer(false); // Auto-close drawer on mobile
                    if (subItems) handleSubMenuToggle();
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                  {subItems && (openSubMenu ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {subItems && (
                  <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {subItems.map((subItem) => (
                        <ListItemButton
                          key={subItem.label}
                          sx={{ pl: 4 }}
                          component={Link}
                          to={subItem.path}
                          selected={currentPath === subItem.path}
                          onClick={() => isMobile && toggleDrawer(false)}
                        >
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
