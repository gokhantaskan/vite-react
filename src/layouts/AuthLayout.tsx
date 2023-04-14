import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@/assets/img/icon.svg";

interface IAuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function AuthLayout({ title, description, children }: IAuthLayoutProps) {
  return (
    <div className="flex-col u-flex-center-screen">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/"
            aria-label="Return to home page"
            title="Return to home page"
          >
            <Logo className="h-12 text-primary-500 dark:text-white" />
          </Link>
          <h1 className="m-0 text-3xl font-bold">{title}</h1>
          <p className="m-0 text-lg u-text-muted">{description}</p>
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
