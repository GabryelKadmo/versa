import { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { toast } from "react-toastify";

const CartBotton = () => {

  const [cupomValue, setCupomValue] = useState<string>('');
  const [descontoAplicado, setDescontoAplicado] = useState<boolean>(false);
  const [valorDoDesconto, setValorDoDesconto] = useState<number>(0);
  const [valorComDesconto, setValorComDesconto] = useState<number>(0);

  function redirectToEndereço() {

    if (cartItem.length === 0) {
      // Carrinho vazio, exibe uma mensagem de erro ou faz alguma ação apropriada
      toast.error('Seu carrinho está vazio.', {
        position: "bottom-right",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
    (total, item) => total + (item.preco * item.quantidade), 0
  ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  
  descontoAplicado ? localStorage.setItem("valor_total", (valorComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))) 
    : localStorage.setItem("valor_total", (totalPrice));

  const valorTotal = cartItem.reduce(
    (total, item) => total + (item.preco * item.quantidade), 0
  )

  // const descontoValue = (parseFloat(totalPrice) * 0.10);
  // const desconto = descontoValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const darDesconto = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (cupomValue === '10%OFF') {
      setDescontoAplicado(true);
      const desconto = (valorTotal * 0.1);
      setValorDoDesconto(desconto);
      const novoValorTotal = valorTotal - desconto;
      setValorComDesconto(novoValorTotal);
    } else {
      setDescontoAplicado(false);
      setValorDoDesconto(0);
      setValorComDesconto(0);
      if(cupomValue){
        toast.error('Cupom inválido!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }
    }
  }; 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCupomValue(event.target.value);
    if(cupomValue === ''){
      setDescontoAplicado(false);
      setValorDoDesconto(0);
      setValorComDesconto(0);
    }
  };

  return (
    <>
      <div className=" cartFixed">
        <form onSubmit={darDesconto}>
          <input
            className="inputCupom"
            placeholder="Insira seu cupom aqui"
            onChange={handleInputChange}
            type="text"
          />
        </form>

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
            <h5 className="cartBottonText">{valorDoDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
          </div>
        </div>
        <hr className="hrTotal mb-3" />
        <div className="infoValorTotal">
          <br />
          <div>
            <label>Total</label>
          </div>
          <div>
            <h5 className="cartBottonText">{descontoAplicado ? valorComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : totalPrice}</h5>
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
