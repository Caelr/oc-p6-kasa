import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { HousingContext } from '../layouts/Layout'

export default function House() {
  const { id } = useParams()
  const { housing } = useContext(HousingContext)
  const house = housing.find((house) => house.id === id)

  if (!house) {
    return <Navigate to="/404" />
  }

  return (
    <>
      <h1>{house.title}</h1>
    </>
  )
}
