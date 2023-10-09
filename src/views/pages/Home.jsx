import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HousingContext } from '../layouts/Layout'

export default function Home() {
  const { housing, isLoading } = useContext(HousingContext)
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {housing.map((home) => (
            <li key={home.id}>
              <Link to={home.id}>{home.title}</Link>{' '}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
