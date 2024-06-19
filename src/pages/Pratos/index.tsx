import { useParams } from 'react-router-dom';
import FoodsList from '../../components/FoodsList';
import FoodsHeader from '../../components/FoodsHeader';
import FoodsBanner from '../../components/FoodsBanner';
import { Container } from '../../styles';

import { useGetRestaurantByIdQuery } from '../../services/api';
import Cart from '../../components/Cart';

const Pratos = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurante, isLoading } = useGetRestaurantByIdQuery(id!);

  if (isLoading || !restaurante) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <FoodsHeader />
      <FoodsBanner 
        image={restaurante.capa}
        title={restaurante.titulo}
        type={restaurante.tipo}
      />
      <Container>
        <FoodsList pratos={restaurante.cardapio} />
      </Container>
      <Cart />
    </>
  );
}

export default Pratos;
