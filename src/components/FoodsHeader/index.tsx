import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Link } from 'react-router-dom'

const FoodsHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.Container>
        <Link to="/">
          <S.Title>Restaurantes</S.Title>
        </Link>
        <S.Logo src={logo} alt="efood" />
        <S.CartButton onClick={openCart}>{items.length}<span> produto(s) no carrinho</span></S.CartButton>
      </S.Container>
    </S.HeaderBar>
  )
}

export default FoodsHeader
