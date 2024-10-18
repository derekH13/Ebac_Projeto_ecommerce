import { colors, Text } from '../../styles/style'
import { HeaderContainer, NavEstilo } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="Interface">
        <NavEstilo>
          <li>
            <Text size={18} peso={900} color={colors.CorLaranja}>
              Restaurantes
            </Text>
          </li>
          <li>
            <img src="/assets/logo.svg" alt="" />
          </li>
          <li>
            <Text size={18} peso={900} color={colors.CorLaranja}>
              0 produto(s) no carrinho
            </Text>
          </li>
        </NavEstilo>
      </div>
    </HeaderContainer>
  )
}

export default Header
