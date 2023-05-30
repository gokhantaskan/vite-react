import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@/assets/img/icon.svg";
import LocaleChanger from "@/components/shared/LocaleChanger/LocaleChanger";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="flex-col py-4 u-flex-center-screen">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/"
              aria-label="Return to home page"
              title="Return to home page"
            >
              <Logo className="h-12 text-primary-500 dark:text-white" />
            </Link>
            <h1 className="m-0 text-3xl font-bold capitalize">{title}</h1>
            <p className="m-0 text-lg u-text-muted">{description}</p>
            <div className="w-full max-w-lg">{children}</div>
          </div>

          <div className="flex mt-8">
            <LocaleChanger className="mx-auto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AuthLayout;
