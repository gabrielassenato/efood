import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  salmaoEscuro: '#E66767',
  salmaoClaro: '#FFEBD9',
  branca: '#FFFFFF',
  bege: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bege}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
