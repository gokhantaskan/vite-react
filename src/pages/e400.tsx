import Button from "@mui/material/Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-col gap-4 text-center u-flex-center-screen">
      <div>
        <h1 className="m-0 text-[6rem] leading-tight font-mono">
          4<span className="u-text-error">0</span>4
        </h1>
        <h2 className="m-0">Page Not Found</h2>
      </div>
      <p className="max-w-md u-text-muted">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <div className="flex items-center gap-4">
        <Button
          component={Link}
          color="neutral"
          variant="text"
          size="large"
          to="/"
        >
          Return Home
        </Button>
        or
        <Button
          component={Link}
          variant="text"
          size="large"
          to="/auth/login"
        >
          Log In
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
