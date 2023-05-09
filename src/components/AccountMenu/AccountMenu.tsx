import Avatar from "@mui/material/Avatar/Avatar";
import IconButton from "@mui/material/IconButton/IconButton";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Fragment, MouseEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "@/api/services/auth";
import { useAuthStore } from "@/store/authStore";

function AccountMenu() {
  const {
    auth: { user },
    setAuthUser,
  } = useAuthStore();
  const navigate = useNavigate();

  const avatarText = useMemo(() => {
    const name = user?.fullName.split(" ");
    const firstChar = name?.[0].charAt(0);
    const lastChar = name?.[name.length - 1]?.charAt(0);

    return `${firstChar}${lastChar}`;
  }, [user?.fullName]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(cb?: Function) {
    setAnchorEl(null);
    cb?.();
  }

  return (
    <Fragment>
      <IconButton
        id="account-menu-button"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          className="w-[36px] h-[36px] text-sm uppercase"
          alt={user?.fullName}
        >
          {avatarText}
        </Avatar>
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "account-menu-button",
        }}
      >
        <MenuItem
          onClick={() =>
            handleClose(() => {
              signOut();
              setAuthUser(null);
              navigate("/auth/login");
            })
          }
        >
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

export default AccountMenu;
