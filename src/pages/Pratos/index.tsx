import { useParams } from 'react-router-dom'

import FoodsList from '../../components/FoodsList'
import FoodsHeader from '../../components/FoodsHeader'
import FoodsBanner from '../../components/FoodsBanner'
import Foods from '../../models/Foods'

import BistroDelMar from '../../assets/images/Bistro-delMar.jpg'
import LaTavolaItaliana from '../../assets/images/La-Tavola-Italiana.jpg'
import SushiSakura from '../../assets/images/Sushi-Sakura.jpg'
import SteakhousePrime from '../../assets/images/Steakhouse-Prime.jpg'
import VeggieDelight from '../../assets/images/Veggie-Delight.jpg'
import CafeParisien from '../../assets/images/Cafe-Parisien.jpg'
import { Container } from '../../styles'

const listFoods: Foods[] = [
  {
    id: 7,
    image: BistroDelMar,
    title: 'Camarão Frito',
    description:
      'Um restaurante à beira-mar especializado em frutos do mar frescos e pratos mediterrâneos.'
  },
  {
    id: 8,
    image: LaTavolaItaliana,
    title: 'Pizza Napolitana',
    description:
      'Autêntica cozinha italiana com massas artesanais e uma vasta seleção de vinhos.'
  },
  {
    id: 9,
    image: SushiSakura,
    title: 'Hot Filadelfia',
    description:
      'Experiência de sushi de alto nível com ingredientes frescos e uma atmosfera tranquila.'
  },
  {
    id: 10,
    image: SteakhousePrime,
    title: 'Steakhouse Prime',
    description:
      'Carnes premium preparadas ao ponto perfeito, acompanhadas de vinhos exclusivos.'
  },
  {
    id: 11,
    image: VeggieDelight,
    title: 'Veggie Delight',
    description:
      'Um paraíso para os amantes de comida vegana e vegetariana, com pratos inovadores e saborosos.'
  },
  {
    id: 12,
    image: CafeParisien,
    title: 'Café Parisien',
    description:
      'Um charmoso café inspirado na cultura parisiense, servindo café gourmet e doces deliciosos.'
  }
]

const Pratos = () => {
  const { id } = useParams()

  return (
    <>
      <FoodsHeader />
      <FoodsBanner />
      <Container>
        <FoodsList pratos={listFoods} />
      </Container>
    </>
  )
}

export default Pratos
