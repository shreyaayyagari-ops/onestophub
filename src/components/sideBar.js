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

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

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
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Navigation */}
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
              >
                <span className="icon">{icon}</span>
                {isOpen && <span className="label">{label}</span>}
              </Link>

              {/* Only show "Transaction Items" when /transactions is active */}
              {isOpen && subItems && isActive && (
                <div className="sidebar-subitems">
                  {subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className={`sidebar-sublink ${
                        currentPath === subItem.path ? "active" : ""
                      }`}
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
    </aside>
  );
};

export default Sidebar;
