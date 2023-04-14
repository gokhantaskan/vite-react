import loadable from "@loadable/component";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Root from "@/Root";

const App = loadable(() => import("@/pages/app"), {
  fallback: <div>Loading...</div>,
});
const Login = loadable(() => import("@/pages/auth/login"), {
  fallback: <div>Loading...</div>,
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
        element: <Login />,
        path: `${authPath}/login`,
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
