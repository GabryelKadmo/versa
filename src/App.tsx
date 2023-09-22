import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header/Header";
import Footer from "./pages/components/Footer/Footer";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import RegisterPage2 from "./pages/RegistroParte2/RegisterPage2";
// import Layout from "./pages/components/Layout/Layout";
// import NovidadesPage from "./pages/Novidades/NovidadesPage";
import RegisterPage1 from "./pages/RegistroParte1/RegisterPage1";
import LoginPage from "./pages/Login/LoginPage";
import RecuperarSenha from "./pages/RecuperarSenha/Recuperar";
import RecuperarSenha2 from "./pages/RecuperarSenha2/Recuperar2";
import RecuperarSenha3 from "./pages/RecuperarSenha3/Recuperar3";

export default function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Register" element={<RegisterPage1 />} />
          <Route path="/RegisterFinish" element={<RegisterPage2 />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Recuperar" element={<RecuperarSenha />} />
          <Route path="/Codigo" element={<RecuperarSenha2 />} />
          <Route path="/Redefinir" element={<RecuperarSenha3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
