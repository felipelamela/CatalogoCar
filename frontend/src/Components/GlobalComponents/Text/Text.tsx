interface TextProps {
  children: string
  typeText: string
}

const Text: React.FC<TextProps> = ({ children, typeText=""}) => {


  return (
    <>
      <p className={typeText}>{children}</p>
      <style jsx>{`
      p{
        padding: .2rem 1rem;
      }
      .preco{
        font-size:1.2rem;
        font-weight:;
        color: blue;
        padding: 1rem 1rem .8rem;
      }
      .model{
        font-size: .9rem
      }
    `}</style>
    </>
  )
}

export default Text