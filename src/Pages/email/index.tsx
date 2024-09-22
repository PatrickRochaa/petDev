import { useState, FormEvent } from "react";
import Toaster from "react-hot-toast";

export function Increver() {
  // useState para armazenar email
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email === "") {
      Toaster.error("Informe o email", {
        style: {
          borderRadius: 10,
          background: "#000958",
          color: "#EA580C",
        },
      });
      return;
    }

    Toaster.success(
      "Oi tudo bem? Pode ficar tranquilo não salvamos seu email.",
      {
        style: {
          borderRadius: 10,
          background: "#000958",
          color: "#EA580C",
        },
      }
    );
  }

  return (
    <div className="w-full max-w-5xl px-4 mx-auto py-5">
      <div className="flex flex-col w-full mb-4 mt-10">
        <h1 className="font-bold text-2xl text-[#000958]">Se inscreva para </h1>
        <h2
          className="font-bold  text-orange-600
       underline decoration-[#000958] text-3xl"
        >
          Novidades
          <strong className="text-[#000958]">.</strong>
        </h2>
      </div>
      <p className="font-medium my-5">
        Receba acesso a ofertas especiais, promoções, atualizações de produtos,
        novidades e muito mais.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl flex flex-col md:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="md:w-6/12 border-2 border-regal-blue h-10 rounded-md px-2 mb-3"
        />

        <button
          type="submit"
          className="md:w-24 h-10 bg-regal-blue rounded border-0 text-lg font-medium text-orange-600"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
