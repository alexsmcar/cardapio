import React, { useState, useEffect } from "react";
import style from "./Adicionais.module.css";
import Pesquisa from "../compentes-icons/Pesquisa";

function Adicionais() {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          autoComplete="off"
          autoCorrect="off"
        />
        <Pesquisa size={"16px"} fill={"var(--vermelho)"} />
      </div>
    </div>
  );
}

export default Adicionais;
