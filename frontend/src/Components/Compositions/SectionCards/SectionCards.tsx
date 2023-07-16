
import CardCar from '../CardCar/CardCar'

const SectionCards = () => {
  return (
    <>
      <div>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </div>
      <style jsx>{`
        div{
          width:100%;
          max-width:1000px;
          justify-content:space-around;
          display:flex;
          flex-wrap: wrap
        }
      `}</style>
    </>
  )
}

export default SectionCards