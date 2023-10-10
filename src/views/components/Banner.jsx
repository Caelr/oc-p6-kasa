export default function Banner({ image, title }) {
  return (
    <div className="banner">
      {title && <h1 className="banner__title">{title}</h1>}
      {image && (
        <figure className="banner__media">
          <img src={image} alt={title} className="banner__media__image" />
        </figure>
      )}
    </div>
  )
}
