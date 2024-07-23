import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  lightOrange: '#FFEBD9',
  white: '#FFFFFF',
  beige: '#FFF8F2'
}

export const breakpoints = {
  tablet: '1024px',
  cellphone: '767px'
}


export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.beige}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    width: 80%;
  }
`
