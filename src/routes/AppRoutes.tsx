import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Navigation from '../layouts/Navigation'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
