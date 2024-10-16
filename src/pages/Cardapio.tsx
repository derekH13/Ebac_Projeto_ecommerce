import BannerCardapio from '../components/BannerCardapio/BannerCardapio'
import Header from '../components/Header/Header'
import CardapioComidas from '../containers/CardapioComidas/CardapioComidas'
import Footer from '../containers/Produtos/Footer/Footer'
import { GlobalStyle } from '../styles/style'

const Cardapio = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BannerCardapio />
      <CardapioComidas />
      <Footer />
    </>
  )
}

export default Cardapio
