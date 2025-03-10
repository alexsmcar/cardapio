import React from "react";
import "./App.css";
import "./Cores.css";
import Header from "./componets/Header";
import Main from "./componets/ConteudoMain";
import { CarrinhoStorage } from "./componets/carrinhoDeCompras/CarrinhoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </CarrinhoStorage>
    </BrowserRouter>
  );
}

export default App;
