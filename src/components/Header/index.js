import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { MdSupportAgent, MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useTheme,
  useMediaQuery,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import logo from "../../assets/images/onestophub-logo.png";
import SearchBox from "../SearchBox";
import Sidebar from "../sideBar"; // your Sidebar component

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const ICON_COLOR = darkMode ? "#FFD700" : "#000000";

  return (
    <>
      <header className="header">
        {/* Sidebar Toggle Button (Mobile Only) */}
        {isMobile && (
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* SearchBox */}
        <div className="searchbox-wrapper">
          <SearchBox />
        </div>

        {/* Right side icons */}
        <div className="icon-buttons">
          <MdOutlineLightMode
            size={24}
            style={{ color: ICON_COLOR, cursor: "pointer" }}
            onClick={toggleTheme}
          />
          <IoIosNotifications size={24} style={{ cursor: "pointer" }} />
          <MdSupportAgent size={24} style={{ cursor: "pointer" }} />

          <PopupState variant="popover" popupId="profile-menu">
            {(popupState) => (
              <>
                <Button
                  variant="text"
                  {...bindTrigger(popupState)}
                  className="rounded-full min-w-0 p-0"
                >
                  <CgProfile size={24} />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>My Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>Settings</MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      navigate("/logout");
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />

      {/* Page Content */}
      <div className="main-content">{/* All Page Content Starts Here */}</div>
    </>
  );
};

export default Header;
