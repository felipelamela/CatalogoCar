import React from 'react'
import FooterLinks from '../../../GlobalComponents/FooterLinks/FooterLinks'

const lista1 = [
  { nome: "Comprar carro" },
  { nome: "Vender carro" },
  { nome: "App Kavak" },
  { nome: "Onde estamos" },
]
const lista2 = [
  { nome: "Perguntas frequentes" },
  { nome: "Blog" },
  { nome: "Guia de Preços" },
  { nome: "Carreias" },
]
const lista3 = [
  { nome: "Contato" },
  { nome: "Impresa" },
  { nome: "Brasil" }, ,
]


const SectionFooterLinks = () => {


  return (
    <>
      <section>
        <h2>Kavak</h2>
        {lista1.map((lin, key) => (
          <FooterLinks
            key={key}
            links={lin}
          />

        ))}


      </section>
      <style jsx>{`
        
        
        h2{
          color:white;
        }      
      `}</style>

    </>
  )
}

export default SectionFooterLinks