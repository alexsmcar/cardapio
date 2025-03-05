import React, { useState, useEffect } from "react";
import style from "./Adicionais.module.css";
import Pesquisa from "../compentes-icons/Pesquisa";
import Adicionar from "../compentes-icons/Adicionar";
import Remover from "../compentes-icons/Remover";

function Adicionais({ item, formatValue }) {
  const [value, setValue] = useState("");
  const [adicionais, setAdicionais] = useState([]);
  const [qtd, setQtd] = useState({})

  function diminuir(id) {
    setQtd((prev) => {
      return {
        ...prev,
        [id]: prev[id] > 0 ? prev[id] - 1 : 0
      }
    })
  }

  function aumentar(id) {
    setQtd((prev) => {
      return {
        ...prev,
        [id]: prev[id] + 1
      }
    })
  }
  useEffect(() => {
    if (value) {
      const add = item.adicionais.filter((prev) => {
        console.log;
        if (prev.nome.toLowerCase().includes(value.toLowerCase())) {
          return prev;
        }
      });
      setAdicionais(add);
    } else {
      setAdicionais(item.adicionais);
    }
  }, [value]);

  useEffect(() => {
    const value = adicionais.reduce((prev, item) => {
      return {
        ...prev,
        [item.id]: 0,
      }
    },{})
    setQtd(value)

  },[adicionais])

  console.log(qtd)

  return (
    <div>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          autoComplete="off"
          autoCorrect="off"
          placeholder="Buscar adicional..."
        />
        <Pesquisa size={"18px"} fill={"var(--vermelho)"} />
      </div>
      <div className={style.adicionaisContainer}>
        {adicionais.map((adicional) => (
          <div key={adicional.id} className={style.adicionais}>
            <div className={style.addInfo}>
              <h2 className={style.nome}>{adicional.nome}</h2>
              <p className={style.preco}>{`(+ ${formatValue(
                adicional.preco
              )})`}</p>
            </div>
            <div className={style.addItem}>
              <button onClick={() => diminuir(adicional.id)}>
                <Remover size={"20px"} fill={"var(--cinzaEscuro1)"}/>
              </button>
              <button>{qtd[adicional.id]}</button>
              <button onClick={() => aumentar(adicional.id)}>
                <Adicionar size={"20px"} fill={"var(--vermelho)"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adicionais;
