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
  border: solid 1px ${cores.salmaoEscuro};
  border-top: none;
  color: ${cores.salmaoEscuro};

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
  border: none;
  color: ${cores.branca};
  background-color: ${cores.salmaoEscuro};
  cursor: pointer;
`
