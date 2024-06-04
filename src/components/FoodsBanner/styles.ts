import styled from 'styled-components'

import { cores } from '../../styles'

export const Image = styled.div`
  position: relative;
  padding-top: 25px;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.branca};

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 1;
  }
`

export const Description = styled.h2`
  font-size: 32px;
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  padding-top: 156px;
`
