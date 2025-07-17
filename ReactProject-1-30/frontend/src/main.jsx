import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./authContext/AuthContext.jsx";
import ProductContex from "./productContext/ProductContex.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <ProductContex>
      <App />
    </ProductContex>
  </AuthContext>
);
