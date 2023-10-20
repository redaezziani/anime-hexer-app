import './css/App.css'
import  NavBar  from './components/NavBar'
import {
  Home,
  Anime,
  ListAnime,
  NotFound
} from './routes/exports'
import {
  Route,
  Routes
}
from 'react-router-dom'

function App() {

  return (
    <div className=" w-full relative min-h-screen flex justify-start items-center gap-2 flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/list" element={<ListAnime />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
