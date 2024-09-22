import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold text-2xl">Erro - 404 </h1>
      <h2 className="font-medium m-2">Página não encontrada!</h2>
      <Link
        to={"/"}
        className="bg-regal-blue text-orange-600 my-3 p-1 px-3 rounded  font-medium"
      >
        Acessar produtos!
      </Link>
    </div>
  );
}
