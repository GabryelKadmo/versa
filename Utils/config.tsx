import { useState } from "react";

const API = "https://versa.onrender.com";
const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTQxMDA2NCwianRpIjoiNTRlYTg5MWEtN2IwMS00NjVkLTlkM2QtN2Q2YjQwZmZmMjg0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjY1MGJhMWZkMjYyMGIxYTM2Mzk2YjM3YSIsIm5iZiI6MTY5NTQxMDA2NCwiZXhwIjoxNjk1NDEwOTY0fQ.LANhLEps6KBNKUMF3kzOPjzZ6XgetrVez9L-fK3xDZI";
export const login = async (loginForm: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(loginForm),
  };

  const response = await fetch(`${API}/session/login`, config);
  const data = await response.json();

  return data;
};

export const register = async (registerForm: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    method: "POST",
    body: JSON.stringify(registerForm),
  };

  const response = await fetch(`${API}/users`, config);
  const data = await response.json();

  return data;
};

export { bearerToken };
