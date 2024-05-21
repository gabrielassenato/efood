import { HeaderBar, Logo, Title, Carrinho, Container } from './styles'

import logo from '../../assets/images/logo.png'

const FoodsHeader = () => (
  <HeaderBar>
    <Container>
      <Title>Restaurantes</Title>
      <Logo src={logo} alt="efood" />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </Container>
  </HeaderBar>
)

export default FoodsHeader
