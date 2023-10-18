import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import Slider from '../components/Slider'
import { HousingContext } from '../../App'
import Error from './404'

export default function House() {
  const { id } = useParams()
  const { housing } = useContext(HousingContext)
  const house = housing.find((house) => house.id === id)

  if (!house) {
    return <Error />
  }

  return (
    <main className="house">
      <Slider images={house.pictures} title={house.title} />
      <section className="house__detail">
        <div className="house__detail__info">
          <h1 className="house__detail__title">{house.title}</h1>
          <p className="house__detail__location">{house.location}</p>
          <div className="house__detail__tag__wrapper">
            {house.tags.map((tag, index) => (
              <p className="house__detail__tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <aside className="house__detail__aside">
          <div className="house__detail__host__wrapper">
            <p className="house__detail__host">{house.host.name}</p>
            <figure className="house__detail__media">
              <img
                src={house.host.picture}
                alt={house.host.name}
                className="house__detail__media__image"
              />
            </figure>
          </div>
          <Rating rating={+house.rating} />
        </aside>
      </section>
      <section className="house__collapse">
        <Collapse title="Description" description={house.description} />
        <Collapse title="Équipements" list={house.equipments} />
      </section>
    </main>
  )
}
