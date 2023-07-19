interface LinkMenuProps {
  Text: string
}


const LinkMenu: React.FC<LinkMenuProps> = ({ Text }) => {
  return (
    <>
      <a className='linksMenu' href="/">{Text}</a>
      <style jsx>{`
          a{
            font-size:1.2rem;
            text-decoration:none;
            padding:.5rem .8rem;
            margin:5px;

          }
      `}</style>
    </>
  )
}

export default LinkMenu