import { Text } from '../../styles/style'
import { EstiloBanner } from './styles'

const BannerCardapio = () => {
  return (
    <EstiloBanner>
      <div className="Interface">
        <div className="content ">
          <Text color="white" peso={100} size={32} className="text__primeiro">
            Italiana
          </Text>

          <Text color="white" peso={900} size={32} className="text__segundo">
            La Dolce Vita Trattoria
          </Text>
        </div>
      </div>

      <img src="/assets/fundo.png" alt="" />
    </EstiloBanner>
  )
}

export default BannerCardapio
