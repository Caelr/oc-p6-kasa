import { useState } from 'react'

export default function Slider({ images, title }) {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex((index) => (index + 1) % images.length)
  }
  const showPreviousImage = () => {
    setImageIndex((index) => (index - 1 + images.length) % images.length)
  }

  return (
    <section className="house__slider">
      <div className="house__slider__gallery">
        {images.map((imageUrl) => (
          <figure className="house__slider__media" key={imageUrl}>
            <img
              src={imageUrl}
              alt={title}
              className="house__slider__media__image"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          </figure>
        ))}
      </div>
      {images.length > 1 && (
        <>
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
            {imageIndex + 1}/{images.length}
          </p>
        </>
      )}
    </section>
  )
}
