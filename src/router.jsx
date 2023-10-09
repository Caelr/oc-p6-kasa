import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from './views/layouts/Layout'
import Error from './views/pages/404'
import About from './views/pages/About'
import Home from './views/pages/Home'
import House from './views/pages/House'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/a-propos',
        element: <About />,
      },
      {
        path: '/:id',
        element: <House />,
      },
      { path: '*', element: <Error /> },
    ],
  },
])
