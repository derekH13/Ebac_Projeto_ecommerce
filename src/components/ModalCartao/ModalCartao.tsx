import { Botao, Campo, colors, Text } from '../../styles/style'
import { Cart, ModalCart } from '../Carrinho/styles'
import { Formulario } from '../ModalEbdereco/styles'
import { Container, ContainerSegundo } from './styles'

type props = {
  onClick: () => void
  onClickEndereco: () => void
}

const ModalCartao = ({ onClick, onClickEndereco }: props) => {
  return (
    <ModalCart>
      <Cart>
        <Text color={colors.CorBage} peso={700} size={16}>
          Pagamento - Valor a pagar R$ 190,90
        </Text>
        <Formulario>
          <label htmlFor="">Nome no cartão</label>
          <Campo />

          <Container>
            <span>
              <label htmlFor="">Numero do cartão</label>
              <Campo />
            </span>

            <span>
              <label htmlFor="">CVV</label>
              <Campo />
            </span>
          </Container>

          <ContainerSegundo>
            <span>
              <label htmlFor="">Mês do vencimento</label>
              <Campo />
            </span>

            <span>
              <label htmlFor="">Ano de vencimento</label>
              <Campo />
            </span>
          </ContainerSegundo>

          <div className="Container__btn">
            <Botao onClick={onClick}>finalizar pagamento</Botao>
            <Botao onClick={onClickEndereco}>
              Voltar para a edição de endereço
            </Botao>
          </div>
        </Formulario>
      </Cart>
    </ModalCart>
  )
}

export default ModalCartao
