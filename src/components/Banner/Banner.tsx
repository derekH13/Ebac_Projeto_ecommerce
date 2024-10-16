import { colors, Text } from '../../styles/style'
import * as S from './styles'

const Banner = () => {
  return (
    <S.ContainerBanner>
      <div className="interface">
        <img src="/assets/logo.svg" alt="" />

        <Text color={colors.CorLaranja} size={36} peso={900}>
          Viva experiências gastronômicas no conforto de casa
        </Text>
      </div>
    </S.ContainerBanner>
  )
}

export default Banner
