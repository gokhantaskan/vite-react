import loadable from "@loadable/component";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import { PageLoader } from "@/components/loaders/PageLoader";
import Root from "@/Root";

const App = loadable(() => import("@/pages/app"), {
  fallback: <PageLoader />,
});
const LoginPage = loadable(() => import("@/pages/auth/login"), {
  fallback: <PageLoader />,
});
const RegisterPage = loadable(() => import("@/pages/auth/register"), {
  fallback: <PageLoader />,
});

const Dashboard = loadable(() => import("@/pages/app/dashboard"));
const NotFound = loadable(() => import("@/pages/e400"));

const authPath = "/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <App />,
        children: [
          {
            element: <Dashboard />,
            index: true,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
