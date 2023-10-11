import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import { HousingContext } from '../layouts/Layout'
import Error from './404'
import Slider from '../components/Slider'

export default function House() {
  const { id } = useParams()
  const { housing } = useContext(HousingContext)
  const house = housing.find((house) => house.id === id)

  // const [imageIndex, setImageIndex] = useState(0)

  if (!house) {
    return <Error />
  }

  // const showNextImage = () => {
  //   setImageIndex((index) => (index + 1) % house.pictures.length)
  // }
  // const showPreviousImage = () => {
  //   setImageIndex(
  //     (index) => (index - 1 + house.pictures.length) % house.pictures.length
  //   )
  // }

  return (
    <main className="house">
      <Slider images={house.pictures} title={house.title} />
      {/* <section className="house__slider">
        <div className="house__slider__gallery">
          {house.pictures.map((imageUrl) => (
            <figure className="house__slider__media" key={imageUrl}>
              <img
                src={imageUrl}
                alt={house.title}
                className="house__slider__media__image"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            </figure>
          ))}
        </div>
        <button onClick={showPreviousImage} className="house__slider__button">
          <svg
            className="house__slider__button__icon"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
        <button onClick={showNextImage} className="house__slider__button">
          <svg
            className="house__slider__button__icon"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </button>

        <p className="house__slider__counter">
          {imageIndex + 1}/{house.pictures.length}
        </p>
      </section> */}
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
