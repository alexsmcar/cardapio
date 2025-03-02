import React from "react";
import style from "./ItensCardapio.module.css";

function ItensCardapio({ itens, status }) {
  const format = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  })

  function formatValue(value) {
    return format.format(value)
  }

  return (
    <div className={`${style.container} ${status ? style.active : ""}`}>
      {itens.map(({id, ...el}) => {
        return <div key={id} className={style.cardapioContainer}>
          <div className={style.descricao}>
            <h3>{el.nome}</h3>
            <p>{el.descricao}</p>
            <span>{formatValue(el.preco)}</span>
          </div>
          <div>
            <img className={style.img} src={el.img} alt={el.nome}></img>
          </div>
        </div>;
      })}
    </div>
  );
}

export default ItensCardapio;
