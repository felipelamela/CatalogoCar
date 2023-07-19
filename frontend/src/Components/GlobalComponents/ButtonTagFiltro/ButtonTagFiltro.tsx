interface ButtonTagFiltroProprs {
  Text: string
  ativaModal: boolean
  setListaFiltros: Function
  listaFiltros: string[]
}

const ButtonTagFiltro: React.FC<ButtonTagFiltroProprs> = ({ Text, ativaModal, setListaFiltros, listaFiltros }) => {


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
      <button
        onClick={handleClick}
        className={ativaModal ? 'Ativo' : ''}>{Text}
      </button>
      <style jsx>{`
        button{
          display:none;
        }
        button.Ativo{
          background:white;
          align-self:start;
          text-align: start;
          border: none;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          display: inline;
          padding: .8rem 1.3rem;
          margin:5px;
          font-size: 1rem;
          cursor: pointer;
        }   
        button:hover{
          background:#efefef;
        }

      `}</style>
    </>
  )
}

export default ButtonTagFiltro