import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLoader } from "@/components/loaders/PageLoader";
import Root from "@/Root";

const App = loadable(() => pMinDelay(import("@/pages/app"), 1_000), {
  fallback: <PageLoader />,
});
const LoginPage = loadable(
  () => pMinDelay(import("@/pages/auth/login"), 1_000),
  {
    fallback: <PageLoader />,
  }
);
const RegisterPage = loadable(
  () => pMinDelay(import("@/pages/auth/register"), 1_000),
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
        name: "App",
        element: <App />,
        children: [
          {
            name: "Dashboard",
            element: <Dashboard />,
            index: true,
          },
          {
            name: "Settings",
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        name: "Login",
        element: <LoginPage />,
        path: `${authPath}/login`,
      },
      {
        name: "Register",
        element: <RegisterPage />,
        path: `${authPath}/signup`,
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
