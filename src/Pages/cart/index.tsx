import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartProps } from "../../context";

export function Cart() {
  //importando funçoes do Context
  const { cart, total, addItemCart, removeItemCart, payment } =
    useContext(CartContext);

  function pag(cart: CartProps[]) {
    payment(cart);
  }
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {cart.length === 0 && ( //  mensagem caso carrinho esteja vazio
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops seu carrinho está vazinho...</p>
          <Link
            to={"/"}
            className="bg-regal-blue text-orange-600 my-3 p-1 px-3 rounded font-medium"
          >
            Acessar produtos!
          </Link>
        </div>
      )}

      {cart.map((item) => (
        //mostrando produtos adicionados
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-regal-blue px-1"
        >
          <Link to={`/products/${item.id}`}>
            <img src={item.cover} alt={item.title} className="w-28" />
          </Link>
          <strong>
            {" "}
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-regal-blue text-orange-600 rounded font-medium flex items-center justify-center px-1.5"
              onClick={() => removeItemCart(item)}
            >
              -
            </button>
            {item.amount}
            <button
              className="bg-regal-blue text-orange-600 rounded font-medium flex items-center justify-center px-1"
              onClick={() => addItemCart(item)}
            >
              +
            </button>
          </div>

          <strong className="mr-2">
            SubTotal:{" "}
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && (
        <div className="flex justify-between px-4 mt-4">
          <p className="font-bold">Total: {total}</p>
          <button
            className="bg-regal-blue text-orange-600 rounded font-medium px-4  py-1"
            onClick={() => pag(cart)}
          >
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}
