import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/Registro/RegisterPage";
import Layout from "./pages/components/Layout/Layout";
import NovidadesPage from "./pages/Novidades/NovidadesPage";
import RegisterPage from "./pages/Registro/RegisterPage";

export default function App() {
  return (
    <div>
      <RegisterPage />
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/NovidadesPage" element={<NovidadesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter> */}
    </div>
  );
}
