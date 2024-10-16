import styled, { createGlobalStyle } from 'styled-components'
import { PropsTagInfo, PropsTitle } from '../interface/interface'

export const colors = {
  CorFundo: '#FFF8F2',
  CorLaranja: '#E66767',
  CorBage: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body{
    background-color: ${colors.CorFundo};

  .Interface{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  }
`

export const Text = styled.h1<PropsTitle>`
  font-size: ${(PropsTitle) => PropsTitle.size}px;
  font-weight: ${(PropsTitle) => PropsTitle.peso};
  color: ${(PropsTitle) => PropsTitle.color};
`

export const TagInfo = styled.div<PropsTagInfo>`
  padding-top: ${(PropsTagInfo) => PropsTagInfo.p_vertical}px;
  padding-right: ${(PropsTagInfo) => PropsTagInfo.p_horizontal}px;
  padding-bottom: ${(PropsTagInfo) => PropsTagInfo.p_vertical}px;
  padding-left: ${(PropsTagInfo) => PropsTagInfo.p_horizontal}px;
  background-color: ${colors.CorLaranja};
  color: white;
`

export const BotaoPrimary = styled(TagInfo).attrs({ as: 'button' })`
  border: none;

  &:hover {
    background-color: #0056b3; /* Efeito de hover */
  }
`

export const Botao = styled.button`
  border: none;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${colors.CorBage};
  color: ${colors.CorLaranja};
`

export const Campo = styled.input`
  border: none;
  width: 100%;
  background-color: ${colors.CorBage};
  height: 32px;
  font-size: 14px;
  font-weight: 700;
`
