import { createGlobalStyle } from 'styled-components'

const Cores = {
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
    background-color: ${Cores.bege}
  }
`
