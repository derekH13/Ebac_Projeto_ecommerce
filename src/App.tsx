import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import { Provider } from 'react-redux'
import { store } from './store'

const Rotas = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/pagina-cardapio/:id" element={<Cardapio />} />
    </Switch>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
