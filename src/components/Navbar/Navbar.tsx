import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import div from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tw from "twin.macro";

import { ReactComponent as Logo } from "@/assets/img/logo.svg";

export function Navbar({ className }: { className?: string }) {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
              >
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
              >
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
}
