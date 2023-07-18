interface TitleProprs {
  Text: string;
  TypeTag: keyof JSX.IntrinsicElements;
}

const Title: React.FC<TitleProprs> = ({ Text, TypeTag }) => {
  return (
    <>
      <TypeTag>{Text}</TypeTag>
      <style jsx>{`
        ${TypeTag} {
          padding: .3rem .8rem;
          font-size: 0.95rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Title;
