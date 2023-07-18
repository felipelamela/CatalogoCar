
import CardCar from '../../CardCar/CardCar'

const SectionCards = () => {
  return (
    <>
      <article>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </article>
      <style jsx>{`
        article{
          margin: 0 auto;
          width:100%;
          max-width:1000px;
          justify-content:space-around;
          display:flex;
          flex-wrap: wrap;
          gap: 30px;
        }
      `}</style>
    </>
  )
}

export default SectionCards