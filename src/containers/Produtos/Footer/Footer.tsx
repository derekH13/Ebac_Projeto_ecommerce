import { colors, Text } from '../../../styles/style'
import { FooterEstilo } from './styles'

const Footer = () => {
  return (
    <FooterEstilo>
      <div>
        <img src="/assets/logo.svg" alt="" />

        <ul>
          <li>
            <img src="/assets/insta.svg" alt="" />
          </li>
          <li>
            <img src="/assets/facebook.svg" alt="" />
          </li>
          <li>
            <img src="/assets/twitter.svg" alt="" />
          </li>
        </ul>

        <Text size={10} color={colors.CorLaranja} peso={400}>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </div>
    </FooterEstilo>
  )
}

export default Footer
