import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { Container } from '../../styles'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: listRestaurants, isLoading } = useGetFeaturedRestaurantQuery()

  if (!listRestaurants) {
    return <h3>Carregando...</h3>
  }

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
