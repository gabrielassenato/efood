import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { Container } from '../../styles'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [listRestaurants, setListRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setListRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <Container>
        <RestaurantList restaurantes={listRestaurants} />
      </Container>
    </>
  )
}

export default Home
