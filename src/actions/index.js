import axios from "axios";

export const FETCH_LOGIN = "FETCH_LOGIN";

export function fetchLogin(userEmail, userPassword) {
  // Login
  console.log("[FETCH_LOGIN] /src/actions/index.js");
  console.log("[FETCH_LOGIN] POST Request");

  const request = axios.post("https://example.com/api/v1/login/", {
    userEmail: userEmail,
    userPassword: userPassword
  });

  return {
    type: FETCH_LOGIN,
    payload: request
  };
}
