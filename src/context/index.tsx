import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../Pages/home";
import Toaster from "react-hot-toast";

//interface criada para o Context
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (product: CartProps) => void;
  payment: (product: CartProps) => void;
  total: string;
}

////interface criada baseada na API e
//criada para o Context com adiçao do amount e total

export interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

// interface para o filho do CartProvider
interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductsProps) {
    //Adiciona o carrinho e verficar se tem o produto

    Toaster.success("Produto adicionado ao carrinho.", {
      style: {
        borderRadius: 10,
        background: "#000958",
        color: "#EA580C",
      },
    });

    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      //verrificar se o produto ja foi adicionado
      //caso ja exista o produto só aumentar valor e quantidade

      const carList = cart;

      carList[indexItem].amount = carList[indexItem].amount + 1;
      carList[indexItem].total =
        carList[indexItem].amount * carList[indexItem].price;

      setCart(carList);
      totalResultCart(carList);
      return;
    }

    // adicionando produto a lista
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  }

  //remover produto do carrinho
  function removeItemCart(product: CartProps) {
    // encontrar produto na lista
    const removeItem = cart.findIndex((item) => item.id === product.id);

    Toaster.success("Produto removido do carrinho.", {
      style: {
        borderRadius: 10,
        background: "#000958",
        color: "#EA580C",
      },
    });

    if (cart[removeItem]?.amount > 1) {
      //diminuir quantidade
      const carList = cart;
      carList[removeItem].amount = carList[removeItem].amount - 1;
      carList[removeItem].total =
        carList[removeItem].total - carList[removeItem].price;
      setCart(carList);
      totalResultCart(carList);
      return;
    }

    //deletar item
    const deleteItem = cart.filter((item) => item.id !== product.id);
    setCart(deleteItem);
    totalResultCart(deleteItem);
  }

  //total do carrinho
  function totalResultCart(items: CartProps[]) {
    const myCart = items;
    const result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    const resultFormat = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(resultFormat);
  }

  //funçao para pagamento
  function payment() {
    Toaster.success("Pagamento realizado com sucesso.", {
      style: {
        borderRadius: 10,
        background: "#000958",
        color: "#EA580C",
      },
    });
    setCart([]);
    totalResultCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
        payment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
