import { useNavigate } from 'react-router-dom'
import { BotaoPrimary, colors, Text } from '../../styles/style'
import { CardEstilo } from './styles'
import { Restaurantes } from '../../interface/interface'
import { Util } from '../../Util/Util'

type props = {
  data: Restaurantes
}

const Card = ({ data }: props) => {
  const navegar = useNavigate()

  return (
    <CardEstilo
      corFundo="white"
      corTexto={colors.CorLaranja}
      height={385}
      width={472}
    >
      <img src={data.capa} alt="" />

      <div className="card__content">
        <div className="card__content__titulo">
          <Text color={colors.CorLaranja} peso={700} size={18}>
            {data.titulo}
          </Text>

          <span>
            {data.avaliacao}
            <img src="/assets/estrela.svg" alt="" />
          </span>
        </div>

        <Text
          color={colors.CorLaranja}
          peso={400}
          size={14}
          className="descricao"
        >
          {' '}
          {Util.DescDiminuir(data.descricao)}{' '}
        </Text>

        <BotaoPrimary
          p_horizontal={6}
          p_vertical={4}
          onClick={() => navegar(`/pagina-cardapio/${data.id - 1}`)}
        >
          {' '}
          Saiba mais
        </BotaoPrimary>
      </div>
    </CardEstilo>
  )
}

export default Card
