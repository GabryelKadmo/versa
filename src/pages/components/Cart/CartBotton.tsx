const CartBotton = () => {
  return (
    <>
      <div className="spacer"></div>
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
            <h5>R$ 400,00</h5>
          </div>
        </div>
        <div className="infoValores">
          <br />
          <div>
            <label>Frete</label>
          </div>
          <div>
            <h5>R$ 0,00</h5>
          </div>
        </div>
        <div className="infoValores2">
          <br />
          <div>
            <label>Desconto</label>
          </div>
          <div>
            <h5>-R$ 2,00</h5>
          </div>
        </div>
        <hr />
        <div className="infoValores">
          <br />
          <div>
            <label>Total</label>
          </div>
          <div>
            <h5>R$ 398,00</h5>
          </div>
        </div>
        <br />
        <button type="submit" className="pagamentoButton">
          Prosseguir para o pagamento
        </button>
      </div>
    </>
  );
};

export default CartBotton;
