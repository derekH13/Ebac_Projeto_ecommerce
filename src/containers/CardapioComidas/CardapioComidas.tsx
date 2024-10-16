import { useState } from 'react'
import CardCardapio from '../../components/CardCardapio/CardCardapio'
import { Container } from './styles'
import ModalComida from '../../components/ModalComida/ModalComida'
import Carrinho, { Cart } from '../../components/Carrinho/Carrinho'
import ModalEndereco from '../../components/ModalEbdereco/ModalEbdereco'
import ModalCartao from '../../components/ModalCartao/ModalCartao'

const cartItems: Cart[] = [
  {
    titulo: 'Pizza Marguerita',
    preco: 'R$ 60,99',
    imagem: '/assets/comida_1.png'
  }
]

export const CardapioComidas = () => {
  const [Modal, setModal] = useState(false)
  const [ModalCart, setModalCart] = useState(false)
  const [ModalEnderecos, setModalEnderecos] = useState(false)
  const [ModalCartoes, setModalCartoes] = useState(false)

  function toggleModal() {
    setModal(!Modal)
  }

  function AbrirCart() {
    setModal(!Modal)
    setModalCart(!ModalCart)
    setModalEnderecos(false)
  }

  function fecharCart() {
    setModalCart(!ModalCart)
  }

  function IrEndereco() {
    setModalEnderecos(true)
    setModalCartoes(false)
    setModalCart(false)
  }

  function IrParaCartao() {
    setModalEnderecos(false)
    setModalCartoes(true)
  }

  function fechar() {
    setModalCartoes(false)
  }

  return (
    <>
      <div className="Interface">
        <Container>
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
          <CardCardapio
            titulo="Pizza Marguerita"
            descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            buttonText="Adicionar ao carrinho"
            rowoucolumn="column"
            onClickModal={toggleModal}
          />
        </Container>
      </div>

      {Modal && (
        <ModalComida onClick1={toggleModal} onClickModal1={AbrirCart} />
      )}

      {ModalCart && (
        <Carrinho
          dadosCart={cartItems}
          onClick={fecharCart}
          onClickEndereco={IrEndereco}
        />
      )}

      {ModalEnderecos && (
        <ModalEndereco onClick={IrParaCartao} onClickEndereco={AbrirCart} />
      )}

      {ModalCartoes && (
        <ModalCartao onClickEndereco={IrEndereco} onClick={fechar} />
      )}
    </>
  )
}

export default CardapioComidas
