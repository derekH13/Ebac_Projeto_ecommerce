import { useEffect, useState } from 'react'
import { Botao, colors, Text } from '../../styles/style'
import CarrinhoCart from '../CarrinhoCart/CarrinhoCart'
import { Cart, ModalCart, Container } from './styles'
import { ComidaCardapio } from '../../interface/interface'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Util } from '../../Util/Util'

type props = {
  onClick: () => void
  onClickEndereco: () => void
}

const Carrinho = ({ onClick, onClickEndereco }: props) => {
  const [valorTotal, setValorTotal] = useState(0)
  const dadosCart = useSelector((state: RootReducer) => state.cart)

  console.log(dadosCart.items)

  useEffect(() => {
    const total = dadosCart.items.reduce((acc, item) => acc + item.preco, 0)
    setValorTotal(total)
  }, [dadosCart.items])

  return (
    <ModalCart>
      <Cart>
        <div className="excluir" onClick={onClick}>
          <img src="/assets/close.svg" alt="" />
        </div>

        <Container>
          {dadosCart.items.map((item, index) => (
            <CarrinhoCart
              key={index}
              titulo={item.nome}
              preco={Util.formatDollarToReal(item.preco)}
              imagem={item.foto}
            />
          ))}
        </Container>

        <div className="valor">
          <div>
            <Text color={colors.CorBage} peso={700} size={14}>
              Valor total
            </Text>

            <Text color={colors.CorBage} peso={700} size={14}>
              R$ {Util.formatDollarToReal(valorTotal)}
            </Text>
          </div>

          <Botao onClick={onClickEndereco}>Continuar com a entrega</Botao>
        </div>
      </Cart>
    </ModalCart>
  )
}

export default Carrinho
