import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./pages/components/Header/Header";
import Footer from "./pages/components/Footer/Footer";
import EndereçoEntrega from "./pages/EndereçoEntrega/EndereçoEntrega";
// import Layout from "./pages/components/Layout/Layout";
import NovidadesPage from "./pages/Novidades/NovidadesPage";
import LandingPageNew from "./pages/LandingPageNew/LandingPageNew";
import RegisterPage1 from "./pages/RegistroParte1/RegisterPage1";
import LoginPage from "./pages/Login/LoginPage";
import RecuperarSenha from "./pages/RecuperarSenha/Recuperar";
import RecuperarSenha2 from "./pages/RecuperarSenha2/Recuperar2";
import RecuperarSenha3 from "./pages/RecuperarSenha3/Recuperar3";
import Carrinho from "./pages/components/Cart/Carrinho";
import InfoProduto from "./pages/InfoProduto/InfoProduto";
import Provider from "./pages/components/Context/Provider";
import PacotesPage from "./pages/Pacotes/PacotesPage";
import PaginaCalca from "./pages/ProdutosEspecificos/PaginaCalca"
import PaginaCamisa from "./pages/ProdutosEspecificos/PaginaCamisa"
import PaginaMoletom from "./pages/ProdutosEspecificos/PaginaMoletom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  if (localStorage.getItem("endereço") === null) {
    localStorage.setItem("endereço", JSON.stringify("None"));
  }

  return (
    <div>
      <BrowserRouter>
        <Provider>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route path="/" element={<LandingPageNew />} />
            <Route path="/produtos" element={<NovidadesPage />} />
            <Route path="/pacotes" element={<PacotesPage />} />
            <Route path="/produto/:_id" element={<InfoProduto />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage1 />} />
            <Route path="/endereço" element={<EndereçoEntrega />} />
            <Route path="/recuperar" element={<RecuperarSenha />} />
            <Route path="/codigo" element={<RecuperarSenha2 />} />
            <Route path="/redefinir" element={<RecuperarSenha3 />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/calcas" element={<PaginaCalca />} />
            <Route path="/camisas" element={<PaginaCamisa />} />
            <Route path="/moletons" element={<PaginaMoletom />} />
          </Routes>
        </Provider>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
