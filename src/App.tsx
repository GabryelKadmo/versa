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
import InfoProduto from "./pages/InfoProduto/InfoProduto"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Novidades" element={<NovidadesPage />} />
          <Route path="/Produto" element={<InfoProduto />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage1 />} />
          <Route path="/Endereço" element={<EndereçoEntrega />} />
          <Route path="/Recuperar" element={<RecuperarSenha />} />
          <Route path="/Codigo" element={<RecuperarSenha2 />} />
          <Route path="/Redefinir" element={<RecuperarSenha3 />} />
          <Route path="/Carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
