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
}

export const Plates = ({ image, title, description }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  return (
    <>
      <Card>
        <CardContainer>
          <RestaurantImage src={image} alt={title} />
          <div>
            <Titulo>{title}</Titulo>
          </div>
          <Descricao>{description}</Descricao>
          <Button className='botao' onClick={() => setModalEstaAberto(true)}>Mais detalhes</Button>
        </CardContainer>
      </Card>

      {modalEstaAberto && (
        <Modal className='visivel'>
          <ModalContent className='container'>
            <img src={image} alt={title} />
            <div className='header'>
              <h4>{title}</h4>
              <p className='descricao'>
                A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <br /><br /> Serve: de 2 a 3 pessoas
              </p>
              <Link to="/pratos">
                <Button>Ver pratos</Button>
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