import { useEffect, useState } from 'react'
import { Botao, colors, Text } from '../../styles/style'
import CarrinhoCart from '../CarrinhoCart/CarrinhoCart'
import { Cart, ModalCart, Container } from './styles'
import { ComidaCardapio } from '../../interface/interface'

type props = {
  dadosCart: ComidaCardapio[]
  onClick: () => void
  onClickEndereco: () => void
}

const Carrinho = ({ dadosCart, onClick, onClickEndereco }: props) => {
  const [valorTotal, setValorTotal] = useState(0)

  console.log(dadosCart)

  useEffect(() => {
    const total = dadosCart.reduce((acc, item) => acc + item.preco, 0)
    setValorTotal(total)
  }, [dadosCart])

  return (
    <ModalCart>
      <Cart>
        <div className="excluir" onClick={onClick}>
          <img src="/assets/close.svg" alt="" />
        </div>

        <Container>
          {dadosCart.map((item, index) => (
            <CarrinhoCart
              key={index}
              titulo={item.nome}
              preco={item.preco.toString()}
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
              R$ {valorTotal}0
            </Text>
          </div>

          <Botao onClick={onClickEndereco}>Continuar com a entrega</Botao>
        </div>
      </Cart>
    </ModalCart>
  )
}

export default Carrinho
