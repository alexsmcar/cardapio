import React, { useEffect, useState } from "react";
import style from "./ModalCardapio.module.css";
import Seta from "../../compentes-icons/seta";
import Adicionais from "../Adicionais";
import Remover from "../../compentes-icons/Remover";
import Adicionar from "../../compentes-icons/Adicionar";

function ModalCardapio({ item, setModal, formatValue }) {
  function handleClick({ target, currentTarget }) {
    if (target === currentTarget) setModal(false);
  }

  function aumentarItem() {
    setQtdItem((prev) => {
      setValor((prev) => prev + item.preco);
      return prev + 1;
    });
  }

  function diminuirItem() {
    setQtdItem((prev) => {
      setValor((prev) => (prev === item.preco ? item.preco : prev - item.preco));
      return (prev > 1 ? prev -1 : 1)

    });
  }

  const [qtd, setQtd] = useState({});
  const [valor, setValor] = useState(item.preco);
  const [qtdItem, setQtdItem] = useState(1);

  useEffect(() => {
    const value = item.adicionais.reduce((prev, item) => {
      return {
        ...prev,
        [item.id]: 0,
      };
    }, {});
    setQtd(value);
  }, []);

  return (
    <div className={style.container} onClick={handleClick}>
      <div className={style.pedido}>
        <div className={style.detalhes}>
          <button onClick={() => setModal(false)}>
            <Seta fill="#FFFFFF" classe={style.svg} />
          </button>
          <p>Detalhes</p>
        </div>
        <div className={style.infoItem}>
          <div className={style.imgContainer}>
            <img
              className={style.img}
              src={item.img}
              alt={item.descricao}
            ></img>
          </div>
          <div className={style.descricaoContainer}>
            <h1>{item.nome}</h1>
            <p className={style.preco}>{formatValue(item.preco)}</p>
            <p className={style.descricao}>{item.descricao}</p>
          </div>
        </div>
        {item.adicionais.length > 0 ? (
          <Adicionais
            adicionais={item.adicionais}
            item={item}
            formatValue={formatValue}
            qtd={qtd}
            setQtd={setQtd}
            setValor={setValor}
            qtdItem={qtdItem}
          />
        ) : null}
        <div className={style.addCarrinhoContainer}>
          <div className={style.addCarrinho}>
            <button onClick={diminuirItem}>
              <Remover size={"20px"} fill={"var(--cinzaEscuro1)"} />
            </button>
            <button>{qtdItem}</button>
            <button onClick={aumentarItem}>
              <Adicionar size={"20px"} fill={"var(--vermelho)"} />
            </button>
          </div>
          <div className={style.btnAdicionarContainer}>
            <button className={style.btnAdicionar}>
              <span>Adicionar</span>
              <span>{formatValue(valor)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCardapio;
