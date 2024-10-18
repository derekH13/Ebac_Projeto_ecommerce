import { CardCardapioProps } from '../../interface/interface'
import { Botao, colors, Text } from '../../styles/style'
import { Util } from '../../Util/Util'
import { EstiloCard } from './styles'

const CardCardapio = ({
  rowoucolumn,
  descricao,
  onClick,
  titulo,
  buttonText,
  onClickModal,
  imagem,
  id,
  pegaridCard
}: CardCardapioProps) => {
  if (!imagem) {
    return <>...</>
  }

  if (!descricao) {
    return <>...</>
  }

  function clicouBotao() {
    if (!onClickModal || !pegaridCard) return
    onClickModal()
    if (id) pegaridCard(id)
  }

  return (
    <EstiloCard rowoucolumn={rowoucolumn}>
      <img src={imagem} alt="" />

      {!(buttonText == 'Adicionar ao carrinho') ? (
        <div onClick={onClick} className="close__fechar">
          <img src="/assets/close.svg" alt="" />
        </div>
      ) : (
        ''
      )}

      <div className="cardCardapio__content">
        <Text peso={900} size={16} color={colors.CorBage} className="titulo">
          {titulo}
        </Text>
        <Text peso={400} size={14} color={colors.CorBage} className="desc">
          {Util.DescDiminuir(descricao)}
        </Text>

        {!(buttonText === 'Adicionar ao carrinho') ? (
          <Text color={colors.CorBage} peso={400} size={14} className="serve">
            Serve: de 2 a 3 pessoas.
          </Text>
        ) : (
          ''
        )}

        <Botao onClick={() => clicouBotao()}>{buttonText}</Botao>
      </div>
    </EstiloCard>
  )
}

export default CardCardapio
