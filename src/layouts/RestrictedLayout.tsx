import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";

function RestrictedLayout() {
  const {
    auth: { isAuthenticated },
  } = useAuthStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default RestrictedLayout;
