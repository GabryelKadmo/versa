import { useState } from "react";

const API = "https://versa.onrender.com";
const bearerToken = localStorage.getItem("token");

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