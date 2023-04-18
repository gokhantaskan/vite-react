import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLoader } from "@/components/loaders/PageLoader";
import Root from "@/Root";

const timeout = 1;

const App = loadable(() => pMinDelay(import("@/pages/app"), timeout), {
  fallback: <PageLoader />,
});
const LoginPage = loadable(
  () => pMinDelay(import("@/pages/auth/login"), timeout),
  {
    fallback: <PageLoader />,
  }
);
const RegisterPage = loadable(
  () => pMinDelay(import("@/pages/auth/register"), timeout),
  {
    fallback: <PageLoader />,
  }
);
const ForgotPasswordPage = loadable(
  () => pMinDelay(import("@/pages/auth/forgot-password"), timeout),
  {
    fallback: <PageLoader />,
  }
);

const Dashboard = loadable(() => import("@/pages/app/dashboard"));
const Settings = loadable(() => import("@/pages/app/settings"));
const NotFound = loadable(() => import("@/pages/e400"));

const authPath = "/auth";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        name: "app",
        element: <App />,
        children: [
          {
            name: "dashboard",
            element: <Dashboard />,
            index: true,
          },
          {
            name: "settings",
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        name: "login",
        element: <LoginPage />,
        path: `${authPath}/login`,
      },
      {
        name: "register",
        element: <RegisterPage />,
        path: `${authPath}/signup`,
      },
      {
        name: "forgot-password",
        element: <ForgotPasswordPage />,
        path: `${authPath}/forgot-password`,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default Router;
