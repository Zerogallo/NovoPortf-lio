import { Routes, Route } from "react-router-dom";
import { Projeto } from "./projeto/projeto.jsx";
import { Contato } from "./contato/contato.jsx";
import { Home } from "./home/home.jsx";

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rotas dinâmicas (opcional) */}
        <Route path="/projeto/:id" element={<ProjetoDetalhe />} />

        {/* Página 404 (opcional) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
