import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsProps } from "../home";
import { api } from "../../services/api";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../context";

export function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductsProps>();
  const { addItemCart } = useContext(CartContext);

  //buscando os detalhes da api
  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProducts();
  }, [id]);

  //funçao para adicionar produto ao carrinho
  function handleAddCartItem(produto: ProductsProps) {
    addItemCart(produto);
    navigate("/cart");
  }

  return (
    <div>
      <main className="w-full max-w-5xl px-4 mx-auto mb-4">
        {product && (
          <section className="w-full mt-8">
            <div className="flex flex-col md:flex-row">
              <img
                src={product?.cover}
                alt={product?.title}
                className="flex-1 w-full max-h-72 object-contain"
              />

              <div className="flex-1 justify-between">
                <p className="font-bold text-2xl mt-4 mb-2 text-[#000958]">
                  {product?.title}
                </p>
                <p className="my-4">{product?.description}</p>

                <strong className="text-[#000958] text-xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>

                <button
                  className="bg-regal-blue p-1 rounded ml-2 px-3"
                  onClick={() => handleAddCartItem(product)}
                >
                  <MdAddShoppingCart size={18} color="#EA580C" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
