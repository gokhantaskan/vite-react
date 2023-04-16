import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import tw from "twin.macro";

import { ReactComponent as Logo } from "@/assets/img/logo.svg";
import { routes } from "@/router";

const appRoutes = routes[0].children.find(
  route => route.name === "App"
)?.children;

export function Navbar({ className }: { className?: string }) {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleItemClick = () => {
    setMobileOpen(false);
  };

  return (
    <Fragment>
      <AppBar
        className={clsx(className, "text-inherit light:bg-white border-b")}
        position="sticky"
        elevation={0}
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ...tw`mr-2` }}
            onClick={() => {
              setMobileOpen(!mobileOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            className="flex items-center gap-2 text-inherit light:text-primary-500"
            to={"/"}
          >
            <Logo className="h-6" />{" "}
            <span className="sr-only">{import.meta.env.VITE_APP_NAME}</span>
          </Link>

          <div className="ml-auto space-x-2">
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => navigate("/auth/login")}
            >
              Log In
            </Button>
            <Button
              color="primary"
              onClick={() => navigate("/auth/signup")}
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ["& .MuiDrawer-paper"]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{ className: "bg-white border-r dark:bg-gray-800" }}
      >
        <Toolbar />
        <div className="overflow-auto">
          <List className="space-y-1">
            {appRoutes?.map((route, index) => (
              <ListItem
                key={index}
                className="py-0"
              >
                <ListItemButton
                  component={NavLink}
                  to={route.index ? "/" : `${route.path}`}
                  onClick={handleItemClick}
                  className="rounded"
                  sx={{
                    "&.active": {
                      ...tw`bg-primary-500 hover:(bg-primary-600) focus:(bg-primary-600) text-white`,
                      userSelect: "none",
                    },
                  }}
                >
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
}
