import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import FoodsList from '../../components/FoodsList'
import FoodsHeader from '../../components/FoodsHeader'
import FoodsBanner from '../../components/FoodsBanner'
import { Container } from '../../styles'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Pratos = () => {
  const { id } = useParams<{ id: string }>()
  const [cardapio, setCardapio] = useState<Cardapio[]>([])
  const [restaurante, setRestaurante] = useState<any>(null) // Tipo any por simplicidade, pode ser especificado melhor

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setRestaurante(data)
          setCardapio(data.cardapio)
        })
    }
  }, [id])

  if (!restaurante) return <p>Carregando...</p>

  return (
    <>
      <FoodsHeader />
      <FoodsBanner 
        image={restaurante.capa}
        title={restaurante.titulo}
        type={restaurante.tipo}
      />
      <Container>
        <FoodsList pratos={cardapio} />
      </Container>
    </>
  )
}

export default Pratos