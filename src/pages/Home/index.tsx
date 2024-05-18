import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

import BistroDelMar from '../../assets/images/Bistro-delMar.jpg'
import LaTavolaItaliana from '../../assets/images/La-Tavola-Italiana.jpg'
import SushiSakura from '../../assets/images/Sushi-Sakura.jpg'
import SteakhousePrime from '../../assets/images/Steakhouse-Prime.jpg'
import VeggieDelight from '../../assets/images/Veggie-Delight.jpg'
import CafeParisien from '../../assets/images/Cafe-Parisien.jpg'
import Header from '../../components/Header'
import { Container } from '../../styles'

const listRestaurants: Restaurant[] = [
  {
    id: 1,
    image: BistroDelMar,
    title: 'Bistro del Mar',
    rate: '4.5',
    description:
      'Um restaurante à beira-mar especializado em frutos do mar frescos e pratos mediterrâneos.'
  },
  {
    id: 2,
    image: LaTavolaItaliana,
    title: 'La Tavola Italiana',
    rate: '4.7',
    description:
      'Autêntica cozinha italiana com massas artesanais e uma vasta seleção de vinhos.'
  },
  {
    id: 3,
    image: SushiSakura,
    title: 'Sushi Sakura',
    rate: '4.8',
    description:
      'Experiência de sushi de alto nível com ingredientes frescos e uma atmosfera tranquila.'
  },
  {
    id: 4,
    image: SteakhousePrime,
    title: 'Steakhouse Prime',
    rate: '4.6',
    description:
      'Carnes premium preparadas ao ponto perfeito, acompanhadas de vinhos exclusivos.'
  },
  {
    id: 5,
    image: VeggieDelight,
    title: 'Veggie Delight',
    rate: '4.9',
    description:
      'Um paraíso para os amantes de comida vegana e vegetariana, com pratos inovadores e saborosos.'
  },
  {
    id: 6,
    image: CafeParisien,
    title: 'Café Parisien',
    rate: '4.4',
    description:
      'Um charmoso café inspirado na cultura parisiense, servindo café gourmet e doces deliciosos.'
  }
]

const Home = () => (
  <>
    <Header />
    <Container>
      <RestaurantList restaurantes={listRestaurants} />
    </Container>
  </>
)

export default Home
