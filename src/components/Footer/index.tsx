import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Logo, Title, FooterBar, Socials } from '../Footer/styles'

const Footer = () => (
  <div>
    <FooterBar>
      <Logo src={logo} alt="efood" />
      <Socials>
        <img src={instagram} alt="classificação" />
        <img src={facebook} alt="classificação" />
        <img src={twitter} alt="classificação" />
      </Socials>
      <Title>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Title>
    </FooterBar>
  </div>
)

export default Footer
