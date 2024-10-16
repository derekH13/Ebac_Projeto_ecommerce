import { useNavigate } from 'react-router-dom'
import { BotaoPrimary, colors, Text } from '../../styles/style'
import { CardEstilo } from './styles'

const Card = () => {
  const navegar = useNavigate()

  return (
    <CardEstilo
      corFundo="white"
      corTexto={colors.CorLaranja}
      height={385}
      width={472}
    >
      <img src="/assets/comida_1.png" alt="" />

      <div className="card__content">
        <div className="card__content__titulo">
          <Text color={colors.CorLaranja} peso={700} size={18}>
            Le Dolce Vita Trattoria
          </Text>

          <span>aval</span>
        </div>

        <Text
          color={colors.CorLaranja}
          peso={400}
          size={14}
          className="descricao"
        >
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quam
          voluptas nam repudiandae cum libero accusamus tempora sit voluptate
          alias atque. Quae ullam sunt cumque fuga sint consequuntur! Error,
          maxime.{' '}
        </Text>

        <BotaoPrimary
          p_horizontal={6}
          p_vertical={4}
          onClick={() => navegar('/pagina-cardapio')}
        >
          {' '}
          Saiba mais
        </BotaoPrimary>
      </div>
    </CardEstilo>
  )
}

export default Card
