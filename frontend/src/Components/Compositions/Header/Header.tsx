import React from 'react'
import SectionMenuBar from '../SectionComponents/SectionMenuBar/SectionMenuBar'

const Header = () => {
  return (
    <>
      <header>
        <p>KAVAK</p>

        <SectionMenuBar />
      </header>
      <style jsx>{`
        header{
          width:100%;
          max-width:1300px;
          padding:2rem 0;
          margin:0 auto;
          display: flex;
          justify-content:space-between;
          box-sizing:border-box;
        }
      
      
      `}</style>

    </>
  )
}

export default Header