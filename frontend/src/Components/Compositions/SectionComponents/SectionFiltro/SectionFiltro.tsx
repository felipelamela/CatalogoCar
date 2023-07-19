import React from 'react'
import TagFiltro from '../../../GlobalComponents/TagFiltro/TagFiltro'

interface FiltroProps {
  setListaFiltros: Function
  listaFiltros: string[]

}

const listaBotaoFiltro = [
  {
    nome: "Promoção",
    conteudo: ['Promoção Seleção']
  },
  {
    nome: "Compre um carro online",
    conteudo: ['Online']
  },
  {
    nome: "Localização - Estado ",
    conteudo: ['Minas Gerais', "Rio de Janeiro", "São Paulo"]
  },
  {
    nome: "Ano",
    conteudo: ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2012",]
  },
  {
    nome: "Tipo",
    conteudo: ['Convertible', "Coupe", "Hatchback", "Minivan", "Pickup", "Sedan", "Suv", "Wagon"]
  },
  {
    nome: "Transmissão ",
    conteudo: ['Automático', "Manual"]
  },
  {
    nome: "Estatus do carro",
    conteudo: ['Disponível', "Reservado"]
  },
]




const SectionFiltro: React.FC<FiltroProps> = ({ setListaFiltros, listaFiltros }) => {
  return (
    <>
      <article>
        <nav>
          <ul>
            {listaBotaoFiltro.map((b, key) => (
              <TagFiltro
                key={key}
                Text={b.nome}
                contentExtra={b.conteudo}
                setListaFiltros={setListaFiltros}
                listaFiltros={listaFiltros}
              />


            ))}


          </ul>
        </nav>
      </article>
      <style jsx>{`
        article{
          max-width: 300px;
          width: 100%;
          box-sizing:border-box;
        }
      
      `}</style>

    </>
  )
}

export default SectionFiltro