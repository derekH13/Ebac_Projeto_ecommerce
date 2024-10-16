import Card from '../../components/Card/Card'
import { ProdutosEstilo } from './styles'

const Produtos = () => {
  return (
    <section className="Interface">
      <ProdutosEstilo>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProdutosEstilo>
    </section>
  )
}

export default Produtos
