export interface User {
  email: string;
  password: string;
  fullName: string;
}

const getUsers = (): User[] =>
  JSON.parse(sessionStorage.getItem("users") || "[]");

export async function signUp({
  email,
  password,
  fullName,
}: User): Promise<User> {
  return new Promise((resolve, reject) => {
    const users = getUsers();
    const user = { email, password, fullName };

    if (users.findIndex((u: User) => u.email === email) === -1) {
      users.push(user);
      sessionStorage.setItem("users", JSON.stringify(users));
      resolve(user);
    } else {
      reject(new Error("Email already exists!"));
    }
  });
}

export async function signIn({
  email,
  password,
}: Pick<User, "email" | "password">): Promise<Omit<User, "password">> {
  return new Promise((resolve, reject) => {
    const users = getUsers();
    const user = users.find((u: User) => u.email === email);

    if (user && user.password === password) {
      const { fullName, email } = user;

      sessionStorage.setItem("user", JSON.stringify({ fullName, email }));
      resolve({ fullName, email });
    } else {
      reject(new Error("Email or password is incorrect!"));
    }
  });
}

export async function signOut() {
  return new Promise(resolve => {
    sessionStorage.removeItem("user");
    resolve(null);
  });
}
