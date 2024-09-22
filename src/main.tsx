import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { Toaster } from "react-hot-toast";
import CartProvider from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="top-left" reverseOrder={true} />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
