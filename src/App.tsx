import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/home";
import { Cart } from "./Pages/cart";
import { DetailProduct } from "./Pages/detail";
import { NotFound } from "./Pages/notFound";
import { Layout } from "./Components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:id",
        element: <DetailProduct />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
