interface ButtonTagFiltroProprs {
  Text: string
  ativaModal: boolean
}

const ButtonTagFiltro: React.FC<ButtonTagFiltroProprs> = ({ Text, ativaModal }) => {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    
    console.log(e.currentTarget.innerText)
  }
  return (
    <>
      <button
        onClick={handleClick}
        className={ativaModal ? 'Ativo' : ''}>{Text}</button>
      <style jsx>{`
        button{
          display:none;
        }
        button.Ativo{
          background:white;
          align-self:start;
          text-align: start;
          border: none;
          border: 1px solid black;
          border-radius: 5px;
          display: inline;
          padding: .8rem 1.3rem;
          font-size: 1rem;
        }   
      `}</style>
    </>
  )
}

export default ButtonTagFiltro