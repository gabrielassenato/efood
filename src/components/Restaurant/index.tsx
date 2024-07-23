import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'

import * as S from './styles'

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
    <S.Card>
      <S.RestaurantImage src={image} alt={title} />
      <S.CardContainer>
        <div>
          <S.Title>{title}</S.Title>
          <span>
            {rate} <img src={estrela} alt="classificação" />
          </span>
        </div>
        <S.Description>{getDescricao(description)}</S.Description>
        <Link to={`/pratos/${id}`}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.CardContainer>
    </S.Card>
  )
}
