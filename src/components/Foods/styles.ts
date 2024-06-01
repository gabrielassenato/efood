import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;
`
export const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  display: block;
`
export const CardContainer = styled.div`
  padding: 8px;
  border-top: none;
  color: ${cores.salmaoClaro};
  background-color: ${cores.salmaoEscuro};

  div {
    display: flex;
    margin-bottom: 16px;
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
  font-size: 14px;
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
  display: flex;
  z-index: 1;
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
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

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1;

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//   }
// `;

// export const CardDetalhes = styled.div`
//   max-width: 1024px;
//   width: 100%;
//   height: 344px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   z-index: 1;
// `;

// export const CardContent = styled.div`
//   display: flex;
//   padding: 16px;
//   background-color: ${cores.salmaoEscuro};

//   img {
//     flex-shrink: 0;
//     width: 280px;
//     height: 280px;
//     margin-right: 24px;
//     padding-top: 16px;
//     padding-bottom: 16px;
//   }

//   .descricao {
//     margin-top: 16px;
//     margin-bottom: 16px;
//   }

//   .content {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: ${cores.salmaoClaro};

//     div {
//       display: flex;
//       justify-content: space-between;
//       font-weight: bold;
//       margin-bottom: 8px;
//     }

//     .botao {
//       width: 50%;
//     }
//   }
// `;