import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CartContext } from "../../context";

export function Header() {
  //puxar do contect se foi adicionado alguma produto ao carrinho
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full max-w-5xl mx-auto px-1 py-2 border-b-2 border-[#000958] rounded-es-md rounded-br-lg">
      <nav className="w-full max-w-5xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="font-bold ">
          <h1 className="mb-4 font-bold text-5xl text-orange-600">
            Pet
            <span className=" bg-regal-blue bg-clip-text text-transparent">
              Dev
            </span>
          </h1>
        </Link>

        <Link to="/cart" className="relative">
          <MdShoppingCartCheckout size={24} color="#121212" />
          {cartAmount > 0 && (
            <span className="absolute -right-3 -top-3 px-2.5  bg-regal-blue rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
