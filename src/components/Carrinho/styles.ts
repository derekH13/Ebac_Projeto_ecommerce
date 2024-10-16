import styled from 'styled-components'
import { colors } from '../../styles/style'

export const ModalCart = styled.div`
  height: 100vh;
  width: 100%; /* Corrigido aqui */
  position: fixed;
  display: flex; /* Corrigido aqui */
  justify-content: end;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  z-index: 3000;
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Cart = styled.div`
  background-color: ${colors.CorLaranja};
  height: 100vh;
  width: 360px;
  padding: 40px 8px 0px 8px;

  .excluir {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .valor {
    padding-top: 40px;

    div {
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  gap: 16px;
`
