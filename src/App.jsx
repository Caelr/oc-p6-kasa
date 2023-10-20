import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './views/layouts/Footer'
import Navigation from './views/layouts/Navigation'

export const HousingContext = createContext()

export default function App() {
  const [housing, setHousing] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState()

  useEffect(() => {
    const controller = new AbortController()
    // setError(undefined)
    setIsLoading(true)
    fetch('/housing.json', { signal: controller.signal })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then((data) => setHousing(data))
      .catch((error) => {
        if (error?.name === 'AbortError') return
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [])
  return (
    <HousingContext.Provider value={{ housing, isLoading }}>
      <Navigation />
      <Outlet />
      <Footer />
    </HousingContext.Provider>
  )
}
