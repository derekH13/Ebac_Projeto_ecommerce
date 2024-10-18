import styled from 'styled-components'
import { Botao, colors } from '../../styles/style'

export const Modal = styled.div`
  height: 100vh;
  width: 100%; /* Corrigido aqui */
  position: fixed;
  display: flex; /* Corrigido aqui */
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  z-index: 3000;
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .card__modal {
    background-color: ${colors.CorLaranja};
    padding: 32px;
    position: relative;
    width: 100%;

    &__content {
      display: flex;
      gap: 24px;

      .imagem {
        height: 280px;
        width: 280px;
      }

        &__info {
        .desc {
          padding: 16px 0px;
          line-height: 22px;
        }

        ${Botao} {
          margin-top: 16px;
          width: 218px;
        }
      }


  .close__fechar {
    position: absolute;
    top: 8px;
    right: 8px;

    img {
      wigth: 16px;
      height: 16px;
    }


    }
  }
`
