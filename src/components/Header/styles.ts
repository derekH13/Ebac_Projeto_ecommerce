import styled from 'styled-components'
import { colors } from '../../styles/style'

export const HeaderContainer = styled.div`
  background-color: ${colors.CorBage};
  height: 180px;
  width: 100%;
`

export const NavEstilo = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;

  li {
    list-style: none;
  }
`
