import React from 'react';
import Plates from '../Foods'
import { Cardapio } from '../../services/api'; // Certifique-se de importar o tipo correto
import { Container, List } from './styles';

type Props = {
  pratos: Cardapio[];
};

const FoodsList: React.FC<Props> = ({ pratos }) => {
  return (
    <Container>
      <List>
        {pratos.map((plate) => (
          <Plates
            key={plate.id}
            id={plate.id}
            foto={plate.foto}
            nome={plate.nome}
            descricao={plate.descricao}
            porcao={plate.porcao}
            preco={plate.preco}
          />
        ))}
      </List>
    </Container>
  );
};

export default FoodsList;