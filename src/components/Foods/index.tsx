import { Link } from 'react-router-dom'
import {
  Card,
  RestaurantImage,
  CardContainer,
  Button,
  Titulo,
  Descricao,
  Modal,
  ModalContent,

} from './styles'
import { useState } from 'react'

type Props = {
  image: string
  title: string
  description: string
  porcao: string
  preco: number
}

export const Plates = ({ image, title, description, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }


  return (
    <>
      <Card>
        <CardContainer>
          <RestaurantImage src={image} alt={title} />
          <div>
            <Titulo>{title}</Titulo>
          </div>
          <Descricao>{getDescricao(description)}</Descricao>
          <Button className='botao' onClick={() => setModalEstaAberto(true)}>Mais detalhes</Button>
        </CardContainer>
      </Card>

      {modalEstaAberto && (
        <Modal className='visivel'>
          <ModalContent className='container'>
            <img src={image} alt={title} />
            <div className='header'>
              <h4>{title}</h4>
              <p className='descricao'>{description}</p>
              <p>Serve: de {porcao}</p>
              <Link to="/pratos">
                <Button>Adicionar ao carrinho - R$ {preco}</Button>
              </Link>
            </div>
          </ModalContent>
          <div className='overlay' onClick={() => setModalEstaAberto(false)}></div>
        </Modal>
      )}
    </>
  );
};

export default Plates;