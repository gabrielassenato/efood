import styled from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/images/close.png'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;
  margin-bottom: 44px;
`
export const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`
export const CardContainer = styled.div`
  padding: 8px;
  border-top: none;
  color: ${cores.salmaoClaro};
  background-color: ${cores.salmaoEscuro};

  div {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
`

export const Descricao = styled.p`
  margin-bottom: 16px;
`

export const Button = styled.button`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 6px;
  width: 100%;
  border: none;
  color: ${cores.salmaoEscuro};
  background-color: ${cores.salmaoClaro};
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  z-index: 1;

  &.visivel {
    display: flex;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Fechar = styled.button`
  background-image: url(${fechar});
  background-color: transparent;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.salmaoEscuro};
  display: flex;
  padding: 32px;
  position: relative;
  z-index: 1;
  color: ${cores.salmaoClaro};
  

  header {
    display: flex;
  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`