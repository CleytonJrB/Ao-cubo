import { Routes, Route } from "react-router-dom";
import { Comprar } from "./components/Comprar";

import { LoginForm } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/cadastro" element={<LoginForm />} />
      <Route path="/produto" element={<Comprar />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
