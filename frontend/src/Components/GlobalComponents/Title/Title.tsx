
interface TitleProprs {
  Text: string,
  TypeTag: keyof JSX.IntrinsicElements
}

const Title:React.FC<TitleProprs> = ({ Text, TypeTag }) => {
  return (
    <>
      <TypeTag>{Text}</TypeTag>
      <style jsx>{`
        ${TypeTag}{
          font-size: .95rem;
          font-weight: bold;
          padding: .5rem 1rem .2rem; 
        }
      `}</style>
    
    </>
  )
}

export default Title