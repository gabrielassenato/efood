import Platess from '../../models/Foods'
import { Plates } from '../Foods'
import { Container, List } from './styles'
export type Props = {
  pratos: Platess[]
}

const FoodList = ({ pratos }: Props) => (
  <Container>
    <List>
      {pratos.map((plates) => (
        <>
          <Plates
            key={plates.id}
            image={plates.image}
            title={plates.title}
            description={plates.description}
          />
        </>
      ))}
    </List>
  </Container>
)

export default FoodList
