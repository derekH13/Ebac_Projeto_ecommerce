import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { ProdutosEstilo } from './styles'
import { Util } from '../../Util/Util'
import { Restaurantes } from '../../interface/interface'

const Produtos = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>()

  useEffect(() => {
    Util.requisição().then((data) => {
      if (data) setRestaurantes(data)
    })
  }, [])

  return (
    <section className="Interface">
      <ProdutosEstilo>
        {restaurantes?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </ProdutosEstilo>
    </section>
  )
}

export default Produtos
