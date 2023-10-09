import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { HousingContext } from '../layouts/Layout'

export default function House() {
  const { id } = useParams()
  const { housing } = useContext(HousingContext)
  const house = housing.find((house) => house.id === id)
  return (
    <>
      <h1>{house.title}</h1>
    </>
  )
}
