import { HeaderBar, Logo, Title, CartButton, Container } from './styles'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const FoodsHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <Container>
        <Title>Restaurantes</Title>
        <Logo src={logo} alt="efood" />
        <CartButton onClick={openCart}>{items.length} produto(s) no carrinho</CartButton>
      </Container>
    </HeaderBar>
  )
}

export default FoodsHeader
