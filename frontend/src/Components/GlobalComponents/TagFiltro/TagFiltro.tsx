'use client'
import React from "react";
import ButtonTagFiltro from "../ButtonTagFiltro/ButtonTagFiltro"

interface TagFiltroProprs {
  Text: string
}
const TagFiltro: React.FC<TagFiltroProprs> = ({ Text }) => {
  const [modalAtivo, SetModalAtivo] = React.useState<boolean>(false)

  function handleClick() {
    SetModalAtivo((modalAtivo) => !modalAtivo)
    console.log(modalAtivo)
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>{Text}</button>
        <ButtonTagFiltro
          ativaModal={modalAtivo}
          Text="valor" />
      </div>
      <style jsx>{`
        div{
          display: flex;
          flex-direction: column;
          max-width:250px;
          box-sizing: border-box;
          border-bottom: .5px solid black;
        }
        button{
          text-align: start;
          font-size: 1.2rem;
          border:none;
          padding: 1rem 1.2rem;
        }   
      `}</style>

    </>
  )
}

export default TagFiltro