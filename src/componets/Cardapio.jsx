import React, {useState, useEffect} from 'react'
import style from "./Cardapio.module.css"
import ItensCategoria from './ItensCategoria';

function Cardapio() {
    const [pesquisa, setPesquisa] = useState("");
    const [form, setForm] = useState("")
    const [data, setData] = useState("");
    
    const request = async () => {
        const response = await fetch("./cardapio.json");
        const json = await response.json();
        setData(json)
    }

    useEffect(() => {
        request();
    },[])



  return (
    <section className={style.container}>
        <form className={`${style.form} ${form && style.active}`} value={pesquisa} onBlur={() => setForm(false)} onFocus={() => setForm(true)} onChange={({target}) => setPesquisa(target.value)}>
            <input className={style.pesquisa} type='text' autoComplete='off' placeholder='Digite para buscar no cardápio...' />
            <button>
            </button>
        </form>
        {data && (<ItensCategoria data={data} />)}
      
    </section>
  )
}

export default Cardapio
