import { Link } from 'react-router-dom'
import {
  Card,
  RestaurantImage,
  CardContainer,
  Button,
  Titulo,
  Descricao,
  Modal
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

export const Plates = ({ image, title, description }: Props) => {
  return (
    <>
      <Card>
        <CardContainer>
          <RestaurantImage src={image} alt={title} />
          <div>
            <Titulo>{title}</Titulo>
          </div>
          <Descricao>{description}</Descricao>
          <Link to="/pratos">
            <Button>Mais detalhes</Button>
          </Link>
        </CardContainer>
      </Card>
    </>
  )
}

export const Detalhes = ({ image, title, description }: Props) => {
  return (
    <>
      <Modal>
        <Card>
          <CardContainer>
            <RestaurantImage src={image} alt={title} />
            <div>
              <Titulo>{title}</Titulo>
            </div>
            <Descricao>{description}</Descricao>
            <Link to="/pratos">
              <Button>Mais detalhes</Button>
            </Link>
          </CardContainer>
        </Card>
      </Modal>
    </>
  )
}
