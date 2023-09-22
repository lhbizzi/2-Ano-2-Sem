
import Contato from './Components/Contato'
import Ordem from './Components/Ordem'
import { ProdutoP } from './Components/ProdutoP'
import Login from './Components/login'
import Menu from './Components/menu'
import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// componente funcional
function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-col">
          <Menu/>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produto" element={<ProdutoP />} />
          <Route path="/ordem" element={<Ordem/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App