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
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import tw from "twin.macro";

import { ReactComponent as Logo } from "@/assets/img/logo.svg";
import AccountMenu from "@/components/features/AccountMenu/AccountMenu";
import { useAuthStore } from "@/store/authStore";

export function Navbar({ className }: { className?: string }) {
  const { t } = useTranslation("common");
  const { auth } = useAuthStore();
  const navigate = useNavigate();
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const appRoutes = [
    {
      name: t("dashboard"),
      path: "/",
    },
    {
      name: t("settings"),
      path: "/settings",
    },
  ];

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
            {auth.isAuthenticated ? (
              <Fragment>
                <AccountMenu />
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => navigate("/auth/login")}
                >
                  {t("login")}
                </Button>
                <Button
                  color="primary"
                  onClick={() => navigate("/auth/signup")}
                >
                  {t("register")}
                </Button>
              </Fragment>
            )}
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
          <List className="px-4 space-y-1">
            {appRoutes?.map((route, index) => (
              <ListItem
                key={index}
                disablePadding
                disableGutters
              >
                <ListItemButton
                  component={NavLink}
                  to={route.path}
                  onClick={handleItemClick}
                  className="rounded"
                  sx={{
                    "&.active": {
                      ...tw`bg-primary-500 hover:(bg-primary-600) focus:(bg-primary-600) text-white`,
                      userSelect: "none",
                    },
                  }}
                >
                  <ListItemText
                    className="capitalize"
                    primary={t([`${route.name}`])}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
}
