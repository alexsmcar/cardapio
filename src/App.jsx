import React from 'react'
import './App.css'
import "./Cores.css"
import Header from './componets/Header'
import Main from './componets/ConteudoMain'

function App() {
  

  return (
    <BrowserRouter>
      <CarrinhoStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </CarrinhoStorage>
    </BrowserRouter>
  );
}

export default App
