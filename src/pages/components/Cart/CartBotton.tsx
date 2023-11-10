import { useContext } from "react";
import AppContext from "../Context/AppContext";

const CartBotton = () => {
  function redirectToEndereço() {
    if (cartItem.length === 0) {
      // Carrinho vazio, exibe uma mensagem de erro ou faz alguma ação apropriada
      alert("Seu carrinho está vazio.");
    } else {
      // Fazer o esquema da API de pedidos aqui


      window.location.href = "/endereço";
    }
  }
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem } = context;

  const totalPrice = cartItem.reduce(
    (total, item) => total + (item.preco * item.quantidade),0 
  ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  localStorage.setItem("valor_total",(totalPrice));


  return (
    <>
      <div className=" cartFixed">
        <input
          className="inputCupom"
          placeholder="Insira seu cupom aqui"
          type="text"
        />
        <div className="infoValores">
          <br />
          <div>
            <label>Subtotal</label>
          </div>
          <div>
            <h5 className="cartBottonText">{totalPrice}</h5>
          </div>
        </div>
        <div className="infoValores">
          <br />
          <div>
            <label>Frete</label>
          </div>
          <div>
            <h5 className="cartBottonText">R$ 0,00</h5>
          </div>
        </div>
        <div className="infoValores2">
          <br />
          <div>
            <label>Desconto</label>
          </div>
          <div>
            <h5 className="cartBottonText">R$ 0,00</h5>
          </div>
        </div>
        <hr className="hrTotal mb-3" />
        <div className="infoValorTotal">
          <br />
          <div>
            <label>Total</label>
          </div>
          <div>
            <h5 className="cartBottonText">{totalPrice}</h5>
          </div>
        </div>
        <br />
        <button
          onClick={redirectToEndereço}
          type="submit"
          className="pagamentoButton"
        >
          Prosseguir para o pagamento
        </button>
      </div>
    </>
  );
};
 
export default CartBotton;
