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
  id: number
  image: string
  title: string
  rate: number
  description: string
}

export const Restaurant = ({ id, image, title, rate, description }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 234) {
      return descricao.slice(0, 215) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <RestaurantImage src={image} alt={title} />
      <CardContainer>
        <div>
          <Titulo>{title}</Titulo>
          <span>
            {rate} <img src={estrela} alt="classificação" />
          </span>
        </div>
        <Descricao>{getDescricao(description)}</Descricao>
        <Link to={`/pratos/${id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </CardContainer>
    </Card>
  )
}
