import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HousingContext } from '../../App'

export default function Listing() {
  const { housing, isLoading } = useContext(HousingContext)

  return (
    <div className="gallery">
      {housing.map((house) => (
        <Link to={house.id} className="gallery__link" key={house.id}>
          <figure className="gallery__link__media">
            <img
              src={house.cover}
              alt={house.title}
              className="gallery__link__media__image"
            />
            <figcaption className="gallery__link__media__title">
              {house.title}
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  )
}
