import { useEffect } from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

import { useState } from 'react'
import image from '/about.jpg?url'
export default function About() {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch('/about.json', { signal: controller.signal })
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error?.name === 'AbortError') return
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  })
  return (
    <main className="about">
      <Banner image={image} />
      <div className="about__collapse">
        {data.map((info, index) => (
          <Collapse
            title={info.title}
            description={info.description}
            key={index}
          />
        ))}
      </div>
    </main>
  )
}
