import { ReactComponent as Icon } from "@img/icon.svg";
import Button from "@mui/material/Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="flex-col gap-4 text-center u-flex-center-screen">
        <div>
          <h1 className="m-0 text-[5.5rem] leading-tight font-bold light:text-primary-500">
            4<Icon className="h-16 mx-2" />4
          </h1>

          <h2 className="m-0">Page Not Found</h2>
        </div>

        <p className="max-w-md u-text-muted">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex items-center w-full max-w-sm gap-4">
          <Button
            className="flex-1"
            component={Link}
            color="neutral"
            variant="contained"
            size="large"
            to="/"
          >
            Return Home
          </Button>
          <Button
            className="flex-1"
            component={Link}
            variant="contained"
            size="large"
            to="/auth/login"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
