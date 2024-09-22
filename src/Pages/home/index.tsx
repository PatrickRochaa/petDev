import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { api } from "../../services/api";
import { About } from "../about";
import { Increver } from "../email";

//interface criada baseada na API
export interface ProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  //useState que vai armazenar os produtos
  const [products, setProducts] = useState<ProductsProps[]>([]);

  // chamando o Context para usar arquivo existente la
  const { addItemCart } = useContext(CartContext);

  //ciclo para puxar os dados e adiconar ao useState
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  //funçao para adicionar produto nao carrinho
  function AddCartItem(produto: ProductsProps) {
    addItemCart(produto);
  }

  return (
    <div>
      <About />
      <div className=" py-5">
        <main className="w-full max-w-5xl px-4 mx-auto mb-4">
          <h1 className="font-bold text-center text-3xl mb-10 mt-5 text-[#000958] underline decoration-orange-600">
            Nossos Produtos.
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((produto) => (
              <section className="w-full" key={produto.id}>
                <Link to={`/products/${produto.id}`}>
                  <img
                    src={produto.cover}
                    alt={produto.title}
                    className="w-full rounded-lg max-h-70 mb-2"
                  />
                  <p className="font-medium mt-1 mb-2 text-[#000958]">
                    {produto.title}
                  </p>
                </Link>

                <div className="flex gap-3 items-center">
                  <strong className="text-[#000958] text-xl">
                    {produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                  <button
                    className="bg-regal-blue p-1 rounded ml-2 px-3"
                    onClick={() => AddCartItem(produto)}
                  >
                    <MdAddShoppingCart size={18} color="#EA580C" />
                  </button>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
      <Increver />
    </div>
  );
}
