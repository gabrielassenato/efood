import {
  Card,
  RestaurantImage,
  CardContainer,
  Button,
  Titulo,
  Descricao
} from './styles'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  rate: string
  description: string
}

export const Restaurant = ({ image, title, rate, description }: Props) => (
  <Card>
    <RestaurantImage src={image} alt={title} />
    <CardContainer>
      <div>
        <Titulo>{title}</Titulo>
        <span>
          {rate} <img src={estrela} alt="classificação" />
        </span>
      </div>
      <Descricao>{description}</Descricao>
      <Link to="/pratos">
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  </Card>
)
