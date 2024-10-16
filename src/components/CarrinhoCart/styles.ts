import styled from 'styled-components'
import { colors } from '../../styles/style'

export const CartEstilo = styled.div`
  background-color: ${colors.CorBage};
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  height: 100px;
  max-width: 100%;
  width: 100%;

  img {
    max-width: 84px;
    width: 100%;
    height: 84px;
  }

  .preco {
    padding-top: 16px;
  }

  .excluir {
    position: absolute;
    bottom: 8px;
    right: 8px;

    img {
      max-width: 16px;
      width: 100%;
      height: 16px;
    }
  }
`
