import styled from 'styled-components'
import { colors, Text } from '../../styles/style'

export const ContainerBanner = styled.div`
  height: 384px;
  max-width: 100%;
  width: 100%;
  background-color: ${colors.CorBage};
  padding-top: 64px;

  .interface {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 125px;
      height: 57px;
      margin: 0 auto;
    }

    ${Text} {
      max-width: 539px;
      text-align: center;
      margin: 0 auto;
      padding-top: 138px;
    }
  }
`
