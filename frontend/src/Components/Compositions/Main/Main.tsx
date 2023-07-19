'use cliente'

import React from 'react'
import SectionCards from '../SectionComponents/SectionCards/SectionCards'
import SectionFiltro from '../SectionComponents/SectionFiltro/SectionFiltro'
import SectionSearch from '../SectionComponents/SectionSearch/SectionSearch'

const Main = () => {
  const [ativaFiltro, setAtivaFiltro] = React.useState<boolean>(true)
  const [listaFiltros, setListaFiltros] = React.useState<string[] | null>([])

  return (
    <>
      <main>
        <SectionSearch
          ativaFiltro={ativaFiltro}
          setAtivaFiltro={setAtivaFiltro}
          listaFiltros={listaFiltros}
          setListaFiltros={setListaFiltros}
        />

        <section>
          {ativaFiltro ? <SectionFiltro listaFiltros={listaFiltros} setListaFiltros={setListaFiltros} /> : null}
          <SectionCards
            listaFiltros={listaFiltros}
            setListaFiltros={setListaFiltros}
          />
        </section>


      </main>
      <style jsx>{`
        section{
          margin: 0 auto;
          max-width: 1300px;
          display:flex;
          box-sizing:border-box;
          gap:20px;
        }
      
      `}</style>

    </>
  )
}

export default Main