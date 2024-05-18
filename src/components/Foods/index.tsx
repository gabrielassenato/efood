import {
  Card,
  RestaurantImage,
  CardContainer,
  Button,
  Titulo,
  Descricao
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

export const Plates = ({ image, title, description }: Props) => (
  <Card>
    <CardContainer>
      <RestaurantImage src={image} alt={title} />
      <div>
        <Titulo>{title}</Titulo>
      </div>
      <Descricao>{description}</Descricao>
      <Button>Saiba Mais</Button>
    </CardContainer>
  </Card>
)
