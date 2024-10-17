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
  imagem?: string
  id?: number
  pegaridCard?: (idCard: number) => void
}

export type ComidaCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  avaliacao: number
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: true
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ComidaCardapio[]
}
