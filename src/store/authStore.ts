import { atom, useAtom, useSetAtom } from "jotai";

import { User } from "@/api/services/auth";

export type StoredUser = Omit<User, "password"> | null;

const getSessionUser = (): StoredUser => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const userAtom = atom<StoredUser>(null);
const loadingAtom = atom(true);
const isAuthenticatedAtom = atom(get => get(userAtom) !== null);

const authAtom = atom(get => ({
  user: get(userAtom),
  loading: get(loadingAtom),
  isAuthenticated: get(isAuthenticatedAtom),
}));
authAtom.debugLabel = "authAtom";

export function useAuthStore() {
  const [auth] = useAtom(authAtom);
  const setAuthUser = useSetAtom(userAtom);
  const setLoading = useSetAtom(loadingAtom);

  return {
    // state
    auth,
    // actions
    setAuthUser,
    setLoading,
    init: () => {
      const user = getSessionUser();
      setAuthUser(user);
      setLoading(false);
    },
  };
}
