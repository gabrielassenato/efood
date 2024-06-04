import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 32px;
`