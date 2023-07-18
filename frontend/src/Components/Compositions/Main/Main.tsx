'use cliente'

import React from 'react'
import SectionCards from '../SectionComponents/SectionCards/SectionCards'
import SectionFiltro from '../SectionComponents/SectionFiltro/SectionFiltro'

const Main = () => {
  const [ativaFiltro, setAtivaFiltro] = React.useState<boolean>(true)
  const [listaFiltros, setListaFiltros] = React.useState<string[] | null>(null)

  return (
    <>
      <main>


        <div>
          <button onClick={e => setAtivaFiltro(!ativaFiltro)}>Reduzir</button>

          {listaFiltros && listaFiltros.map((filtro)=>(
            <p>{filtro}</p>
          ))}

        </div>
        <section>
          {ativaFiltro ? <SectionFiltro /> : null}
          <SectionCards />
        </section>




      </main>
      <style jsx>{`
        main{
          display:inline;
        }
        section{
          display:flex;w
        }
      
      `}</style>

    </>
  )
}

export default Main