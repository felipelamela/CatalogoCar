import React from 'react'

interface BoxFiltroProps {
  setAtivaFiltro: Function
  ativaFiltro: boolean
  setListaFiltros: Function
}

const BoxFiltro: React.FC<BoxFiltroProps> = ({ setAtivaFiltro, setListaFiltros, ativaFiltro }) => {
  return (
    <>
      <div className="boxFiltros">
        <div>
          <img src="/img/Menu_bar_menu.svg" alt="" />
          <button className='culto' onClick={e => setAtivaFiltro(!ativaFiltro)}>{ativaFiltro ? "Ocultar Filtros" : "Mostrar Filtros"}</button>

        </div>

        <div>
          <button onClick={e => setListaFiltros([])}>Remover Filtros</button>

        </div>
      </div>
      <style jsx>{`
      div{
        display:flex;
        width:130px;
        align-itens:center
        
      }
      .culto{
        font-weight: bold;
      }
      .boxFiltros{
        width:100%;
        max-width:300px;
        justify-content:space-between;
        display:flex;

      }
      button{
        cursor:pointer;
        background:white;
      }
      img{
        max-width:20px;
      }

    
    `}</style>
    </>
  )
}

export default BoxFiltro