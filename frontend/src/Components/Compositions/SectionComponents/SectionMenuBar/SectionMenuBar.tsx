import React from 'react'
import LinkMenu from '../../../GlobalComponents/LinkMenu/LinkMenu'

const linkMenu = [
  {name: "Comprar carro"},
  {name: "Vender carro"},
  {name: "App Kavak"},
  {name: "Sobre nós"}
]

const SectionMenuBar = () => {
  return (
    <nav>
      <ul>
        {linkMenu.map(link =>(
          <LinkMenu Text={link.name} />
        ))}
      </ul>
      <p>ban</p>
      <p>iconlog</p>
    </nav>
  )
}

export default SectionMenuBar