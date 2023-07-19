interface TextProps {
  children: string
  typeText: string
}

const Text: React.FC<TextProps> = ({ children, typeText = "" }) => {
  return (
    <>
      <p className={typeText}>{children}</p>
      <style jsx>{`
      .model{
        padding: 0rem .8rem;
      }
      .preco{
        padding: 1rem .8rem .5rem;
        font-size:1.4rem;
        font-weight:;
        color: #3374db;
      }
    `}</style>
    </>
  )
}

export default Text