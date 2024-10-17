import styled from 'styled-components'
import { PropsCard } from '../../interface/interface'
import { colors, Text } from '../../styles/style'

export const CardEstilo = styled.div<PropsCard>`
  max-width: ${(PropsCard) => PropsCard.width}px;
  width: 100%;
  height: ${(PropsCard) => PropsCard.height}px;
  background-color: ${(PropsCard) => PropsCard.corFundo};
  color: ${(PropsCard) => PropsCard.corTexto};
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 217px;
  }

  .card__content {
    max-height: 100%;
    height: 100%;
    border-bottom: 1px solid ${colors.CorLaranja};
    border-left: 1px solid ${colors.CorLaranja};
    border-right: 1px solid ${colors.CorLaranja};
    padding: 8px;

    .descricao {
      margin: 16px 0px;
      line-height: 22px;
    }

    &__titulo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          margin-left: 4px;
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`
