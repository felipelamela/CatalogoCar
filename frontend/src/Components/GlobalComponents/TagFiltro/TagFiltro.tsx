'use client'
import React from "react";
import ButtonTagFiltro from "../ButtonTagFiltro/ButtonTagFiltro"

interface TagFiltroProprs {
  Text: string
  setListaFiltros: Function
  listaFiltros: string[]
  contentExtra: string[]
}

const TagFiltro: React.FC<TagFiltroProprs> = ({ Text, setListaFiltros, listaFiltros, contentExtra }) => {
  const [modalAtivo, SetModalAtivo] = React.useState<boolean>(false)

  function handleClick() {
    SetModalAtivo((modalAtivo) => !modalAtivo)
    console.log(modalAtivo)
  } 2
  return (
    <>
      <li>
        <div onClick={handleClick} className="divtag">
          <p >{Text}</p>
          <img className={modalAtivo ? 'modAtivo' : ''} src="/img/arrow.svg" alt="" />
        </div>


        <div className={modalAtivo ? 'modalAtivo' : ''}>
          {contentExtra.map((content, key) => (
            <ButtonTagFiltro
              key={key}
              setListaFiltros={setListaFiltros}
              listaFiltros={listaFiltros}
              ativaModal={modalAtivo}
              Text={content} />
          ))}

        </div>


      </li>
      <style jsx>{`
        li{
          display: flex;
          flex-direction: column;
          max-width:300px;
          width:100%;
          box-sizing: border-box;
          
        }
        .modalAtivo{
          margin: 0 0 1rem;
        }

        li:nth-child(odd){
          border-bottom:1px solid #d9d9d9;
          border-top:1px solid #d9d9d9;
        }

        p{
          text-align: start;
          font-size: 1.2rem;
          border:none;
          padding: 1rem 1.2rem;
          background: white;
        }   
        
        .divtag{
          display:flex;
          justify-content:space-between;
          cursor: pointer;
        }
        img{
          max-width:15px;
          padding: 0 10px 0  0;
        }
        .modAtivo{
          transform: rotate(180deg);
          padding: 0 0  0  10px;
        }
      `}</style>

    </>
  )
}

export default TagFiltro