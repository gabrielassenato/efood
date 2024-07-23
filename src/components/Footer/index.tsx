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
        <a href="https://www.instagram.com/" title='Clique aqui para acessar nosso Instagram'>
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/?locale=pt_BR" title='Clique aqui para acessar nosso Facebook'>
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://x.com/?lang=pt-br" title='Clique aqui para acessar nosso Twitter'>
          <img src={twitter} alt="Twitter" />
        </a>
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
