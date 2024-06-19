import { Cardapio } from '../../services/api'
import { Plates } from '../Foods'
import { Container, List } from './styles'

export type Props = {
  pratos: Cardapio[]
}

export const FoodList = ({ pratos }: Props) => {
  return (
    <Container>
      <List>
        {pratos.map((plates) => (
          <Plates
            key={plates.id}
            image={plates.foto}
            title={plates.nome}
            description={plates.descricao}
            porcao={plates.porcao}
            preco={plates.preco}
          />
        ))}
      </List>
    </Container>
  )
}

export default FoodList
