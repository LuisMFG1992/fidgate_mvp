import './App.css'
import FullScreenCenter from './components/custom/FullScreenCenter'
import { Home, Login, Project } from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Projects, Teams } from './views'

function App() {
  return (
    <FullScreenCenter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}>
          <Route index element={<Navigate to='/projects' replace />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' element={<Project />} />
          <Route path='teams' element={<Teams />} />
          <Route path='products' element={<p>Products</p>} />
          <Route path='financial' element={<p>Financial</p>} />
        </Route>
      </Routes>
    </FullScreenCenter>
  )
}

export default App
