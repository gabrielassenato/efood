import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

type Props = Cardapio

export const Plates = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add({ id, foto, nome, descricao, porcao, preco }))
    dispatch(open())
    setModalEstaAberto(false)
  }

  return (
    <>
      <S.Card>
        <S.CardContainer>
          <S.RestaurantImage src={foto} alt={nome} />
          <div>
            <S.Title>{nome}</S.Title>
          </div>
          <S.Description>{getDescricao(descricao)}</S.Description>
          <S.Button className='botao' onClick={() => setModalEstaAberto(true)}>
            Mais detalhes
          </S.Button>
        </S.CardContainer>
      </S.Card>

      {modalEstaAberto && (
        <S.Modal className='visivel'>
          <S.ModalContent className='container'>
            <S.Close onClick={() => setModalEstaAberto(false)} type="button" />
            <img src={foto} alt={nome} />
            <div className='header'>
              <h4>{nome}</h4>
              <p className='descricao'>{descricao}</p>
              <p>Serve: de {porcao}</p>
              <S.Button onClick={addToCart}>Adicionar ao carrinho - R$ {parseToBrl(preco)}</S.Button>
            </div>
          </S.ModalContent>
          <div className='overlay' onClick={() => setModalEstaAberto(false)}></div>
        </S.Modal>
      )}
    </>
  )
}

export default Plates
