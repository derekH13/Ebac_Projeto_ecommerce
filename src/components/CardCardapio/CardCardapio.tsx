import { CardCardapioProps } from '../../interface/interface'
import { Botao, colors, Text } from '../../styles/style'
import { EstiloCard } from './styles'

const CardCardapio = ({
  rowoucolumn,
  descricao,
  onClick,
  titulo,
  buttonText,
  onClickModal
}: CardCardapioProps) => {
  return (
    <EstiloCard rowoucolumn={rowoucolumn}>
      <img src="/assets/comida_1.png" alt="" />

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
          {descricao}
        </Text>

        {!(buttonText === 'Adicionar ao carrinho') ? (
          <Text color={colors.CorBage} peso={400} size={14} className="serve">
            Serve: de 2 a 3 pessoas.
          </Text>
        ) : (
          ''
        )}

        <Botao onClick={onClickModal}>{buttonText}</Botao>
      </div>
    </EstiloCard>
  )
}

export default CardCardapio
