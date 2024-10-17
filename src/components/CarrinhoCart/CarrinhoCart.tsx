import { colors, Text } from '../../styles/style'
import { CartEstilo } from './styles'

type props = {
  titulo: string
  preco: string
  imagem: string
}

const CarrinhoCart = ({ titulo, preco, imagem }: props) => {
  return (
    <CartEstilo>
      <img src={imagem} alt="" />

      <div>
        <Text color={colors.CorLaranja} peso={900} size={18}>
          {titulo}
        </Text>
        <Text color={colors.CorLaranja} peso={400} size={14} className="preco">
          R$ {preco}0
        </Text>
      </div>

      <div className="excluir">
        <img src="/assets/lixo.svg" alt="" />
      </div>
    </CartEstilo>
  )
}

export default CarrinhoCart
