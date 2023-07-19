import Filtro from '../../../GlobalComponents/Filtro/Filtro'
import CardCar from '../../CardCar/CardCar'
import useFetch from '../../../../useFul/useFetch'
interface CardCarProps {
  listaFiltros: string[]
  setListaFiltros: Function
}



const SectionCards: React.FC<CardCarProps> = ({ listaFiltros, setListaFiltros }) => {
  const { data, error, isLoading } = useFetch('/data/veiculos.json');

  console.log(data)

  if (data === null) return "Loading"
  return (
    <>
      <article>
        <div className='filtros'>
          {listaFiltros && listaFiltros.map((value, key) => (
            <Filtro
              key={key}
              filtro={value}
              listaFiltros={listaFiltros}
              setListaFiltros={setListaFiltros}
            />
          ))}
        </div>
        <div>
            
            {data.map((item, index) =>(
              <CardCar 
                key={index}

                
              />

            ))}

        </div>
      </article>
      <style jsx>{`
        article{
          margin: 0 auto;
          width:100%;
          max-width:1300px;  
          box-sizing:border-box;
        }
        div{

          display:flex;
          flex-wrap:wrap;
          grid-template-columns:repeat(3, 310px);
          gap:10px;
          box-sizing:border-box;
        }
        div.filtros{
          justify-content: flex-start;
        }
      `}</style>
    </>
  )
}

export default SectionCards