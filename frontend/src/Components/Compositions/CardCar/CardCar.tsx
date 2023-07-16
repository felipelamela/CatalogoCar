import Text from "../../GlobalComponents/Text/Text"
import Title from '../../GlobalComponents/Title/Title'

const CardCar = () => {
  return (
    <>
      <div>
        <img src="/img/carro.webp" alt="" />
        <Title
          Text="Mini Countryman S ALL4 TURBO"
          TypeTag='h3'
        />
        <Text typeText='model'>2015 - 71.070 - São Paulo</Text>
        <Text typeText="preco">R$ 112.377</Text>
      </div>
      <style jsx>{`
      div{
        max-width:300px;
        border-radius: 10px;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
      }
      div:hover{
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.25);
      }
      img{
        width:100%;
        border-radius: 10px 10px 0 0;
      }


      `}</style>

    </>


  )
}

export default CardCar