import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await Api.post("/api/logout");

      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("permissions");
      Cookies.remove("role");

      toast.success("Logout Berhasil!", {
        position: "top-right",
        duration: 4000,
      });

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <AppBar position="static" color="default" className="shadow-md mb-10">
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* Uncomment and use the following line if you want to add a logo */}
            {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
          </IconButton>
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 p-2 rounded-lg border"
          />
        </div>
        <div className="flex items-center">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton
            onClick={handleAvatarClick}
            className="ml-3 relative group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Avatar alt="User Avatar" src="/user-avatar.jpg" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-500 transition-transform transform"></div>
            </div>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              style: {
                transform: "translateX(-10px)", // Move the dropdown slightly to the left
              },
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </MenuItem>
            <MenuItem onClick={logout} disabled={loading}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={loading ? "Logging Out..." : "Logout"} />
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
