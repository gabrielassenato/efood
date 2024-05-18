import Restaurante from '../../models/Restaurant'
import { Restaurant } from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => (
  <Container>
    <List>
      {restaurantes.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          rate={restaurant.rate}
          description={restaurant.description}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
