import { Restaurant } from '../Restaurant'

import { Restaurants } from '../../services/api'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurants[]
}

const RestaurantList = ({ restaurantes }: Props) => (
  <Container>
    <List>
      {restaurantes.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.capa}
          title={restaurant.titulo}
          rate={restaurant.avaliacao}
          description={restaurant.descricao}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
