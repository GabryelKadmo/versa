const API = "https://versa-api.vercel.app";
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

export const getProductById = async (id: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
    method: "GET",
  };

  const response = await fetch(`${API}/products/${id}`, config);
  const data = await response.json();
  return data;
};

export const pedido = async (pedidoForm: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(pedidoForm),
  };

  const response = await fetch(`${API}/orders`, config);
  const data = await response.json();

  return data;
};


export { bearerToken };
