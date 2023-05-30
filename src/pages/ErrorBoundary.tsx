import { ReactComponent as Icon } from "@img/icon.svg";
import { Button } from "@mui/material";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError() as any;
  const isRouteError = isRouteErrorResponse(error);
  console.error("Route Error: ", error);

  return (
    <Fragment>
      <Helmet>
        <title>{isRouteError ? `${error.statusText}` : "Error"}</title>
      </Helmet>

      <div className="container">
        <div className="flex-col gap-4 text-center u-flex-center-screen">
          <div>
            <h1 className="m-0 text-[5.5rem] leading-[1] font-bold light:text-primary-500">
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
              variant="contained"
              color="neutral"
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
    </Fragment>
  );
}

export default NotFound;
