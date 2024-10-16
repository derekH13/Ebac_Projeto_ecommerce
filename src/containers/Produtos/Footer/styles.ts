import styled from 'styled-components'
import { colors, Text } from '../../../styles/style'

export const FooterEstilo = styled.footer`
  background-color: ${colors.CorBage};
  width: 100%;
  height: 298px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;

    li {
      list-style: none;

      img {
        height: 24px;
      }
    }
  }
  ${Text} {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
  }
`
