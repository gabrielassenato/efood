import logo from '../../assets/images/logo.png'

import { HeaderBar, Logo, Title } from './styles'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderBar>
)

export default Header
