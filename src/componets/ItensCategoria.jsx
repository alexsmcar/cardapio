import React, {useState} from "react";
import style from "./ItensCategoria.module.css";
import ItensCardapio from "./ItensCardapio";

function ItensCategoria({ data }) {
  const [status, setStatus] = useState(false);
  function handleClick() {
    setStatus((status) => !status)
  }
  console.log(status)

  return (
    <div className={style.container}>
      {data.map(({ id, categoria, itens }) => {
        return (
          <div key={id} className={style.categoriaContainer}>
            <div className={style.categoria} onClick={handleClick}>
              <h2>{categoria}</h2>
            </div>
            <ItensCardapio itens={itens} status={status} />
          </div>
        );
      })}
    </div>
  );
}

export default ItensCategoria;
