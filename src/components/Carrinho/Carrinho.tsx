import { useEffect, useState } from 'react'
import { Botao, colors, Text } from '../../styles/style'
import CarrinhoCart from '../CarrinhoCart/CarrinhoCart'
import { Cart, ModalCart, Container } from './styles'

export type Cart = {
  titulo: string
  preco: string
  imagem: string
}

type props = {
  dadosCart: Cart[]
  onClick: () => void
  onClickEndereco: () => void
}

const Carrinho = ({ dadosCart, onClick, onClickEndereco }: props) => {
  const [valorTotal, setValorTotal] = useState(0)

  function ResultTotal() {
    const result = dadosCart.map((item) => {
      const x = item.preco.split(' ') // Separa a string
      return parseFloat(x[1]) // Usa parseFloat para lidar com decimais
    })

    return result
  }

  // Chama a função ResultTotal e calcula o total
  useEffect(() => {
    const total = ResultTotal().reduce(
      (acumulador, item) => acumulador + item,
      0
    )
    setValorTotal(total) // Atualiza o valor total
  }, [dadosCart]) // Dependência para recalcular quando dadosCart mudar

  // Exemplo de uso
  console.log(valorTotal)

  ResultTotal()

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
              titulo={item.titulo}
              preco={item.preco}
              imagem={item.imagem}
            />
          ))}
        </Container>

        <div className="valor">
          <div>
            <Text color={colors.CorBage} peso={700} size={14}>
              Valor total
            </Text>

            <Text color={colors.CorBage} peso={700} size={14}>
              R$ {valorTotal},99
            </Text>
          </div>

          <Botao onClick={onClickEndereco}>Continuar com a entrega</Botao>
        </div>
      </Cart>
    </ModalCart>
  )
}

export default Carrinho
