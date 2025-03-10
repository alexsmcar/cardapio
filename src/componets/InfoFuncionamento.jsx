import React, {useEffect, useState} from 'react'
import style from "./InfoFucionamento.module.css"

function InfoFuncionamento() {
    const [time, setTime] = useState(false);

    useEffect(()=> {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        if (hour < 22) {
            setTime(true)
        }
    },[])

  return (
    <div className={style.Container}>
        <div className={style.infoContainer}>
            <p className={style.info}>Aberto até as 23:00</p>
            <p className={style.dot}></p>
            <p className={style.info}>Sem pedido minimo</p>
        </div>
        {time && (
            <div className={style.mensagem}>
                <p>Loja fechada no momento</p>
            </div>
        )}
    </div>
  )
}

export default InfoFuncionamento
