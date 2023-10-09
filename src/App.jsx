import { useEffect, useState } from 'react'

function App() {
  const [homes, setHomes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    setError(undefined)
    fetch('housing.json', { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) return res.json()
        return Promise.reject(res)
      })
      .then((data) => setHomes(data))
      .catch((e) => {
        if (e?.name === 'AbortError') return
        setError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1>Hello React</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {homes.map((home) => (
            <li key={home.id}>{home.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
