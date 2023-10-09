import { Outlet } from 'react-router-dom'
import Footer from './views/layouts/Footer'
import Navigation from './views/layouts/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
