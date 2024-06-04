import { Image, Title, Description } from './styles'
import { Container } from '../../styles'

type Props = {
  image: string
  title: string
  type: string
}

export const FoodsBanner = ({ image, title, type }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Description>{type}</Description>
        <Title>{title}</Title>
      </Container>
    </Image>
  )
}

export default FoodsBanner