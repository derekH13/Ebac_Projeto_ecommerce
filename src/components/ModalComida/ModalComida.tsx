import { ComidaCardapio } from '../../interface/interface'
import { Botao, Text } from '../../styles/style'
import { Util } from '../../Util/Util'
import CardCardapio from '../CardCardapio/CardCardapio'
import { Modal } from './styles'

type props = {
  onClick1: () => void
  onClickModal1: () => void
  dadosComida: ComidaCardapio[]
  adicionarCart: (comida: ComidaCardapio) => void
}

const ModalComida = ({
  onClick1,
  onClickModal1,
  dadosComida,
  adicionarCart
}: props) => {
  function clicou() {
    onClick1()
    adicionarCart(dadosComida[0])
  }

  return (
    <Modal>
      <div className="Interface">
        <div className="card__modal">
          <div className="card__modal__content">
            <div onClick={onClickModal1} className="close__fechar">
              <img src="/assets/close.svg" alt="" />
            </div>

            <img src={dadosComida[0].foto} alt="" className="imagem" />

            <div className="card__modal__content__info">
              <Text color="white" peso={900} size={18}>
                {dadosComida[0].nome}
              </Text>

              <Text color="white" peso={400} size={14} className="desc">
                {dadosComida[0].descricao}
              </Text>

              <Text color="white" peso={400} size={14}>
                {dadosComida[0].porcao}
              </Text>

              <Botao onClick={clicou}>
                Adicionar ao carrinho - R${' '}
                {Util.formatDollarToReal(dadosComida[0].preco)}
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default ModalComida
