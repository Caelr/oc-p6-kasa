import { createBrowserRouter } from 'react-router-dom'
import Layout from './views/layouts/Layout'
import About from './views/pages/About'
import Home from './views/pages/Home'
import House from './views/pages/House'
import Error from './views/pages/404'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/a-propos', element: <About /> },
      { path: '/:id', element: <House /> },
      { path: '*', element: <Error /> },
    ],
  },
])
