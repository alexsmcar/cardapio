import React, { useState, useEffect } from "react";
import style from "./Adicionais.module.css";
import Pesquisa from "../compentes-icons/Pesquisa";
import Adicionar from "../compentes-icons/Adicionar";
import Remover from "../compentes-icons/Remover";

function Adicionais({ item, formatValue, qtd, setQtd, setValor, qtdItem }) {
  const [value, setValue] = useState("");
  const [adicionais, setAdicionais] = useState([]);
  const [obs, setObs] = useState("");

  function diminuir(id, preco) {
    setQtd((prev) => {
      return {
        ...prev,
        [id]: prev[id] > 0 ? prev[id] - 1 : 0,
      };
    });
    setValor((prev) => {
      return qtd[id] > 0 ? prev - preco : prev;
    })
  }

  function aumentar(id, preco) {
    setQtd((prev) => {
      return {
        ...prev,
        [id]: prev[id] + 1,
      };
    });
    setValor((prev) => {
      console.log()
      return (prev + preco) * qtdItem
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


  return (
    <div>
      <div>
        <h2 className={style.mensagemAdd}>Deseja algum adicional?</h2>
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
      </div>
      <div className={style.adicionaisContainer}>
        {adicionais.map((adicional) => (
          <div key={adicional.id} className={style.adicionais}>
            <div className={style.addInfo}>
              <h3 className={style.nome}>{adicional.nome}</h3>
              <p className={style.preco}>{`(+ ${formatValue(
                adicional.preco
              )})`}</p>
            </div>
            <div className={style.addItem}>
              <button onClick={() => diminuir(adicional.id, adicional.preco)}>
                <Remover size={"20px"} fill={"var(--cinzaEscuro1)"} />
              </button>
              <button>{qtd[adicional.id]}</button>
              <button onClick={() => aumentar(adicional.id, adicional.preco)}>
                <Adicionar size={"20px"} fill={"var(--vermelho)"} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.obsContainer}>
          <h2>Alguma observação?</h2>
          <textarea placeholder="Ex: sem cebola, tomate, etc..." rows="4" className={style.obs} onChange={({target}) => setObs(target.value) }>{obs}</textarea>
        </div>
    </div>
  );
}

export default Adicionais;
