import {
  Card,
  RestaurantImage,
  CardContainer,
  Button,
  Titulo,
  Descricao,
  Modal,
  Fechar,
  ModalContent,
} from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';
import { Cardapio } from '../../services/api'

type Props = Cardapio;

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const Plates = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...';
    }
    return descricao;
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add({ id, foto, nome, descricao, porcao, preco }));
    dispatch(open());
    
  };

  return (
    <>
      <Card>
        <CardContainer>
          <RestaurantImage src={foto} alt={nome} />
          <div>
            <Titulo>{nome}</Titulo>
          </div>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button className='botao' onClick={() => setModalEstaAberto(true)}>
            Mais detalhes
          </Button>
        </CardContainer>
      </Card>

      {modalEstaAberto && (
        <Modal className='visivel'>
          <ModalContent className='container'>
            <Fechar onClick={() => setModalEstaAberto(false)} type="button" />
            <img src={foto} alt={nome} />
            <div className='header'>
              <h4>{nome}</h4>
              <p className='descricao'>{descricao}</p>
              <p>Serve: de {porcao}</p>
              <Button onClick={addToCart}>Adicionar ao carrinho - R$ {formataPreco(preco)}</Button>
            </div>
          </ModalContent>
          <div className='overlay' onClick={() => setModalEstaAberto(false)}></div>
        </Modal>
      )}
    </>
  );
};

export default Plates;
