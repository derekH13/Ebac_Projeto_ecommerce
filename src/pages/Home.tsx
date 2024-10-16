import Banner from '../components/Banner/Banner'
import Footer from '../containers/Produtos/Footer/Footer'
import Produtos from '../containers/Produtos/Produtos'
import { colors, GlobalStyle } from '../styles/style'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Produtos />
      <Footer />
    </>
  )
}

export default Home
