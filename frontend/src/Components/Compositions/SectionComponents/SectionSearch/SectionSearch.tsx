import BoxFiltro from "../../BoxFiltro/BoxFiltro"
import BoxResultados from "../../BoxResultados/BoxResultados"

interface SearchPros {
  ativaFiltro: boolean
  setAtivaFiltro: Function
  listaFiltros: string[]
  setListaFiltros: Function
}

const SectionSearch: React.FC<SearchPros> = ({ ativaFiltro, setAtivaFiltro, listaFiltros, setListaFiltros }) => {
  return (
    <>
      <section>
        <article className="search">
          <input type="text" placeholder="Busque por uma marca, modelo, ano, cor" />
          <img src="/img/search.svg" alt="" />

        </article>

        <article className="box">
          <BoxFiltro
            setAtivaFiltro={setAtivaFiltro}
            setListaFiltros={setListaFiltros}
            ativaFiltro={ativaFiltro}
          />
          <BoxResultados />
        </article>



      </section >
      <style jsx>{`
        article.box ,h2{
          max-width: 1300px;
          width: 100%;
          display:flex;
          margin: 0 auto ;
          flex-direction:row;
          gap:20px;
          padding: 0 0 1rem 0
        }

        img{
          max-width:20px;
          padding:1rem;
          background:white;
          border-radius: 0 5px 5px 0;
          cursor:pointer;
        }
        .search{         
          justify-content:center;
          background:#3374db;
          display:flex;
          padding: .5rem;
          text-align:center;
          margin: 0 auto 3rem
        }

        input{
          box-sizing:border-box;
          width:100%;
          max-width:1250px;
          font-size: 1rem;
          padding: .9rem;
          border:none;
          border-radius:5px 0 0 5px;
        }
        input:focus{
          border:none;
          box-shadow: 0 0 0 0;
          outline: 0;
        }
      `}</style>
    </>
  )
}

export default SectionSearch