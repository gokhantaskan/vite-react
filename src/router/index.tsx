import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLoader } from "@/components/loaders/PageLoader";
import RestrictedLayout from "@/layouts/RestrictedLayout";

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
const ErrorBoundary = loadable(() => import("@/pages/ErrorBoundary"));

const authPath = "/auth";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <App />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            element: <RestrictedLayout />,
            children: [
              {
                path: "settings",
                element: <Settings />,
              },
            ],
          },
        ],
      },
      {
        element: <LoginPage />,
        path: `${authPath}/login`,
      },
      {
        element: <RegisterPage />,
        path: `${authPath}/signup`,
      },
      {
        element: <ForgotPasswordPage />,
        path: `${authPath}/forgot-password`,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
