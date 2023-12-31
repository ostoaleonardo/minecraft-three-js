import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game.jsx'
import Worlds from './pages/Worlds.jsx'
import CreateWorld from './pages/CreateWorld.jsx'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/worlds' element={<Worlds />} />
            <Route path='/create' element={<CreateWorld />} />
            <Route path='/game'>
                <Route path=':id' element={<Game />} />
            </Route>
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default App
