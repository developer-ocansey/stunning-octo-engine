import SimpleCrypto from "simple-crypto-js";

const cryptoInit = new SimpleCrypto(process.env.REACT_APP_AUTH_PRIVATE_KEY);
const tokenKey = "token";

export const logout = () => {
  if (window.confirm("Are you sure you want to logout")) {
    localStorage.clear();
    window.location.href = "/";
  }
};

export const getStoredToken = () => {
  return localStorage.getItem(tokenKey) || "";
};

export const unAuthenticated = () => {
  return getStoredToken() === "";
};

export const doLogin = (username: string, password: string) => {
  if (username === "" || password === "") {
    return false;
  }
  if (
    process.env.REACT_APP_AUTH_USERNAME === username &&
    process.env.REACT_APP_AUTH_PASSWORD === password
  ) {
    setToken(process.env.REACT_APP_AUTH_PASSWORD);
    return true;
  }
  return false;
};

export const setToken = (token: string) => {
  const encryptedToken = cryptoInit.encrypt(token);

  localStorage.setItem(tokenKey, encryptedToken);
};

export const getToken = () => {
  const decryptedToken = cryptoInit.decrypt(getStoredToken());

  return `Bearer ${decryptedToken}`;
};

export const isActive = (path: string) => {
  return window.location.pathname === path ? "active-menu" : "";
};

export const setPageTitle = (title: string) => {
  document.title = "Libra | " + title;
};

export const formatCurrency = (val: number) => {
  if (val === 0) {
    return val;
  }
  return val
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncate = (input: string, idx: number) => {
  if (input.length > idx) {
    return input.substring(0, idx) + "...";
  }
  return input;
};
