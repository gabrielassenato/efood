import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/images/background.png'

export const HeaderBar = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${colors.orange};
  max-width: 539px;
  width: 100%;
  text-align: center;
`

