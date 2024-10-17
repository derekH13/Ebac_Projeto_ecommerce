import { useEffect, useState } from 'react'
import CardCardapio from '../../components/CardCardapio/CardCardapio'
import { Container } from './styles'
import ModalComida from '../../components/ModalComida/ModalComida'
import Carrinho from '../../components/Carrinho/Carrinho'
import ModalEndereco from '../../components/ModalEbdereco/ModalEbdereco'
import ModalCartao from '../../components/ModalCartao/ModalCartao'
import { Util } from '../../Util/Util'
import { ComidaCardapio, Restaurantes } from '../../interface/interface'
import { useParams } from 'react-router-dom'

export const CardapioComidas = () => {
  const [Modal, setModal] = useState(false)
  const [ModalCart, setModalCart] = useState(false)
  const [ModalEnderecos, setModalEnderecos] = useState(false)
  const [ModalCartoes, setModalCartoes] = useState(false)
  const [DadosModal, setDadosModal] = useState<ComidaCardapio[]>()
  const [dataComidas, setDataComidas] = useState<ComidaCardapio[]>()
  const [cart, setCart] = useState<ComidaCardapio[]>([])

  const parametro = useParams()

  useEffect(() => {
    Util.requisição().then((data) => {
      console.log(parametro.id)

      if (parametro.id) {
        if (data) setDataComidas(data[parseInt(parametro.id)].cardapio)
      }
    })
  }, [])

  function toggleModal() {
    setModal(!Modal)
  }

  function PegaridCArd(idCard: number) {
    setModal(!Modal)

    const result = dataComidas?.filter((item) => item.id == idCard)

    setDadosModal(result)
  }

  function adicionarCart(comida: ComidaCardapio) {
    console.log(comida)

    if (cart) setCart([...cart, comida])
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

  if (!dataComidas) {
    return (
      <>
        <h1>carregando..</h1>
      </>
    )
  }

  return (
    <>
      <div className="Interface">
        <Container>
          {dataComidas.map((item) => (
            <CardCardapio
              key={item.id}
              id={item.id}
              imagem={item.foto}
              titulo={item.nome}
              descricao={item.descricao}
              buttonText="Adicionar ao carrinho"
              rowoucolumn="column"
              onClickModal={toggleModal}
              pegaridCard={PegaridCArd}
            />
          ))}
        </Container>
      </div>

      {Modal && DadosModal ? (
        <ModalComida
          adicionarCart={adicionarCart}
          dadosComida={DadosModal}
          onClick1={AbrirCart}
          onClickModal1={toggleModal}
        />
      ) : (
        ''
      )}

      {ModalCart && cart ? (
        <Carrinho
          dadosCart={cart}
          onClick={fecharCart}
          onClickEndereco={IrEndereco}
        />
      ) : (
        ''
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
