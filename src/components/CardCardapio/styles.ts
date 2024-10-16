import styled from 'styled-components'
import { CardCardapioProps } from '../../interface/interface'
import { Botao, colors } from '../../styles/style'

export const EstiloCard = styled.div<CardCardapioProps>`
  max-width: ${(CardCardapioProps) =>
    CardCardapioProps.rowoucolumn == 'row' ? '1024px' : ' 320px'};
  width: 100%;
  max-height: 340px;
  height: 100%;
  position: relative;
  background-color: ${colors.CorLaranja};
  padding: ${(CardCardapioProps) =>
    CardCardapioProps.rowoucolumn == 'row' ? '32px' : '8px'};
  display: flex;
  flex-direction: ${(CardCardapioProps) =>
    CardCardapioProps.rowoucolumn == 'row' ? 'row' : 'column'};

  gap: ${(CardCardapioProps) =>
    CardCardapioProps.rowoucolumn == 'row' ? '24px' : '0px'};

  .close__fechar {
    position: absolute;
    top: 8px;
    right: 8px;

    img {
      wigth: 16px;
      height: 16px;
    }
  }

  img {
    max-width: ${(CardCardapioProps) =>
      CardCardapioProps.rowoucolumn == 'row' ? '280px' : '100%'};

    height: ${(CardCardapioProps) =>
      CardCardapioProps.rowoucolumn == 'row' ? '280px' : '167px'};

    width: 100%;
  }

  .cardCardapio__content {
    .titulo {
      padding: 8px 0px;
    }

    .desc {
      padding-bottom: 8px;
      line-height: 22px;
    }

    .serve {
      padding: 20px 0px 16px 0px;
    }

    ${Botao} {
      width: ${(CardCardapioProps) =>
        CardCardapioProps.rowoucolumn == 'row' ? '218px' : '100%'};
    }
  }
`
