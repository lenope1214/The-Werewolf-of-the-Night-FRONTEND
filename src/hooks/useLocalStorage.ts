const ACCESS_TOKEN = "@accessToken" as const;
const REFRESH_TOKEN = "@refreshToken" as const;
const USER = "@user" as const;

type UserTypes = {
  clientId: number;
  clientName: string;
  departmentId: number;
  departmentName: string;
  laundryId: number;
  laundryName: string;
  name: string; // 담당자명
  role: "ROLE_JSOL" | "ROLE_LAUNDRY" | "ROLE_CLIENT" | "ROLE_DEPARTMENT";
  userId: number;
  username: string; // 아이디
};

export type LocalStorageTypes = UserTypes & {
  accessToken: string;
  refreshToken: string;
};

export default function useLocalStorage() {
  // token
  // const getToken = localStorage.getItem(ACCESS_TOKEN);

  const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
  };

  const setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };

  const clearToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
  };

  // refreshToken
  const getRefreshToken = localStorage.getItem(REFRESH_TOKEN);

  const setRefreshToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN, token);
  };

  const clearRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN);
  };

  // user
  const getUser = JSON.parse(localStorage.getItem(USER) || "{}") as UserTypes;

  const setUser = (user: UserTypes) => {
    localStorage.setItem(USER, JSON.stringify(user));
  };

  const clearUser = () => {
    localStorage.removeItem(USER);
  };

  return {
    getToken,
    setToken,
    clearToken,
    getRefreshToken,
    setRefreshToken,
    clearRefreshToken,
    getUser,
    setUser,
    clearUser,
  };
}
