import { Image, Title, Description } from './styles'

import { Container } from '../../styles'

import bannerImg from '../../assets/images/image2.png'

const FoodsBanner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Description>Italiana</Description>
      <Title>Italiana Bella Pizza</Title>
    </Container>
  </Image>
)

export default FoodsBanner
