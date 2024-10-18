import { Botao, Campo, colors, Text } from '../../styles/style'
import { Cart, ModalCart } from '../Carrinho/styles'
import { Formulario } from './styles'

type props = {
  onClick?: () => void
  onClickEndereco: () => void
}

const ModalEndereco = ({ onClick, onClickEndereco }: props) => {
  return (
    <ModalCart>
      <Cart>
        <Text color={colors.CorBage} peso={700} size={16}>
          Entrega
        </Text>

        <Formulario>
          <label htmlFor="">Quem irá receber</label>
          <Campo />

          <label htmlFor="">Endereço</label>
          <Campo />

          <label htmlFor="">Cidade</label>
          <Campo />

          <div>
            <span>
              <label htmlFor="">CEP</label>
              <Campo />
            </span>
            <span>
              <label htmlFor="">Número</label>
              <Campo />
            </span>
          </div>

          <label htmlFor="">Complemento (opcional)</label>
          <Campo />

          <div className="Container__btn">
            <Botao onClick={onClick}> Continuar com o pagamento</Botao>
            <Botao onClick={onClickEndereco}> Voltar para o carrinho</Botao>
          </div>
        </Formulario>
      </Cart>
    </ModalCart>
  )
}

export default ModalEndereco
