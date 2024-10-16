import styled from 'styled-components'

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
`
