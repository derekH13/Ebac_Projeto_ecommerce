import CardCardapio from '../CardCardapio/CardCardapio'
import { Modal } from './styles'

type props = {
  onClick1: () => void
  onClickModal1: () => void
}

const ModalComida = ({ onClick1, onClickModal1 }: props) => (
  <Modal>
    <div className="Interface">
      <CardCardapio
        titulo="Pizza Marguerita"
        descricao="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."
        rowoucolumn="row"
        buttonText="Adicionar ao carrinho - R$ 60,99"
        onClick={onClick1}
        onClickModal={onClickModal1}
      />
    </div>
  </Modal>
)

export default ModalComida
