import styled from 'styled-components'
import { cores } from '../../styles'
import background from '../../assets/images/background.png'

export const HeaderBar = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 186px;
  padding: 40px;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.salmaoEscuro};

  @media (max-width: 615px) {
    font-size: 24px;
  }
`

export const CartButton = styled.h2`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  color: ${cores.salmaoEscuro};
`
export const Banner = styled.img`
  height: 280px;
`
