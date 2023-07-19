import React from 'react'

interface FilterProps {
  filtro: string
  listaFiltros: string[]
  setListaFiltros: Function

}

const Filtro: React.FC<FilterProps> = ({ filtro, listaFiltros, setListaFiltros }) => {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const novoFiltro = e.currentTarget.innerText

    if (listaFiltros.includes(novoFiltro)) {
      const listaComFiltroRemovido = listaFiltros.filter(filtro => filtro !== novoFiltro)
      return setListaFiltros(listaComFiltroRemovido)
    }
    setListaFiltros([...listaFiltros, novoFiltro])

  }


  return (
    <>
      <button onClick={handleClick}>{filtro}</button>
      <style jsx>{`
        button{
          color:#3374db;
          display:inline;
          margin:0 0 1rem 0;
          padding:.5rem .7rem;
          border-radius:5px;
          background:white;
          border:1px solid #3374db;
          cursor:pointer;
        }

        button:hover{
          background:#c3d4ef;
        }
      
      
      `}</style>

    </>
  )
}

export default Filtro