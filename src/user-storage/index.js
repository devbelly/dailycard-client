import { ACCESS_TOKEN } from "../constants";

export function getStoredUser() {
  const userInfo = localStorage.getItem(ACCESS_TOKEN);
  return userInfo;
}

export function setStoredUser(userInfo) {
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(userInfo));
}

export function clearStoredUser() {
  localStorage.removeItem(ACCESS_TOKEN);
}
