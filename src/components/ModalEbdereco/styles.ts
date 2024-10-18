import styled from 'styled-components'
import { Botao, colors } from '../../styles/style'

export const Formulario = styled.form`
  padding-top: 16px;
  height: max-content;

  label {
    margin: 8px 0px;
    color: ${colors.CorBage};
    font-size: 14px;
    display: block;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 30px;
  }

  .Container__btn {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
