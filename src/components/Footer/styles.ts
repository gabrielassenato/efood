import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.header`
  padding: 40px;
  display: flex;
  padding-bottom: 32px;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.salmaoClaro};
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 32px;
`

export const Socials = styled.span`
  margin-bottom: 80px;

  img {
    padding-left: 4px;
    margin-right: 4px;
  }
`

export const Title = styled.h2`
  font-size: 12px;
  color: ${cores.salmaoEscuro};
  max-width: 539px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 615px) {
    font-size: 24px;
  }
`
