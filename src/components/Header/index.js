import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/onestophub-logo.png";
import { IoIosNotifications } from "react-icons/io";
import { MdSupportAgent, MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import SearchBox from "../SearchBox";
import Sidebar from "../sideBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
      <header className="header h-16 w-full px-4 flex items-center shadow-md fixed top-0 left-0 z-50 bg-white dark:bg-gray-800">
        <div className="header-inner flex flex-col sm:flex-row w-full items-center sm:justify-between">
          <Link to="/" className="logo-link mb-2 sm:mb-0 sm:ml-4">
            <img src={logo} alt="Logo" className="logo h-10" />
          </Link>

          <div className="search-center w-full sm:w-1/2 my-2 sm:my-0">
            <SearchBox />
          </div>

          <div className="icon-buttons flex items-center gap-4 sm:ml-auto mt-2 sm:mt-0">
            <MdOutlineLightMode
              size={24}
              style={{ color: ICON_COLOR, cursor: "pointer" }}
              onClick={toggleTheme}
            />

            <IoIosNotifications size={24} style={{ cursor: "pointer" }} />
            <MdSupportAgent size={24} style={{ cursor: "pointer" }} />

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button
                    variant="text"
                    {...bindTrigger(popupState)}
                    className="rounded-full min-w-0"
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
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
    </>
  );
};

export default Header;
