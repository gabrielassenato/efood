import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.header`
  height: 384px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.salmaoClaro};
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;
`

export const Title = styled.h2`
  font-size: 12px;
  color: ${cores.salmaoEscuro};
  max-width: 539px;
  text-align: center;

  @media (max-width: 615px) {
    font-size: 24px;
  }
`
