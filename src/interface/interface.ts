export type PropsTitle = {
  size: number
  peso: number
  color: string
}

export type PropsCard = {
  corFundo: string
  corTexto: string
  tamanhoButtom?: 'big' | 'small'
  aviliacao?: boolean
  height: number
  width: number
}

export type PropsTagInfo = {
  p_horizontal: number
  p_vertical: number
}

export type CardCardapioProps = {
  rowoucolumn: 'row' | 'column'
  titulo?: string
  descricao?: string
  onClick?: () => void
  onClickModal?: () => void
  buttonText?: string
}
