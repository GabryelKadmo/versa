import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./pages/components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Footer from "./pages/components/Footer/Footer";
import EndereçoEntrega from "./pages/EndereçoEntrega/EndereçoEntrega";
// import Layout from "./pages/components/Layout/Layout";
import NovidadesPage from "./pages/Novidades/NovidadesPage";
import RegisterPage1 from "./pages/RegistroParte1/RegisterPage1";
import LoginPage from "./pages/Login/LoginPage";
import RecuperarSenha from "./pages/RecuperarSenha/Recuperar";
import RecuperarSenha2 from "./pages/RecuperarSenha2/Recuperar2";
import RecuperarSenha3 from "./pages/RecuperarSenha3/Recuperar3";
import Carrinho from "./pages/components/Cart/Carrinho";
import InfoProduto from "./pages/InfoProduto/InfoProduto";
import Provider from "./pages/components/Context/Provider";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/produtos" element={<NovidadesPage />} />
            <Route path="/produto" element={<InfoProduto />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage1 />} />
            <Route path="/endereço" element={<EndereçoEntrega />} />
            <Route path="/recuperar" element={<RecuperarSenha />} />
            <Route path="/codigo" element={<RecuperarSenha2 />} />
            <Route path="/redefinir" element={<RecuperarSenha3 />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
