import { useState } from "react";

const API = "https://versa.onrender.com";

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
