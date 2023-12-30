import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game.jsx'
import Worlds from './pages/Worlds.jsx'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/worlds' element={<Worlds />} />
            <Route path='/game' element={<Game />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default App
