import { useContext } from "react";
import AppContext from "../Context/AppContext";

const CartBotton = () => {
  function redirectToEndereço() {
    window.location.href = "/endereço";
  }

  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem } = context;

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.preco, 0)
  return (
    <>
      <div className=" cartFixed">
        <hr />
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
            <h5>R${totalPrice}</h5>
          </div>
        </div>
        <div className="infoValores">
          <br />
          <div>
            <label>Frete</label>
          </div>
          <div>
            <h5>R$ 14,00</h5>
          </div>
        </div>
        <div className="infoValores2">
          <br />
          <div>
            <label>Desconto</label>
          </div>
          <div>
            <h5>-R$ 0,00</h5>
          </div>
        </div>
        <hr />
        <div className="infoValores">
          <br />
          <div>
            <label>Total</label>
          </div>
          <div>
            <h5>R${totalPrice + 14}</h5>
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
