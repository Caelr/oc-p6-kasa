import { useState } from "react"

export default function Collapse({ title, description, list }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="menu">

    <details className="details" name="accordion">
      <summary className="details__title"><span>{title}</span></summary>
      </details>
      <div className="details__content">
        {description && (
          <p className="details__content__description">{description}</p>
        )}
        {list && (
          <ul className="details__content__list">
            {list.map((item, index) => (
              <li className="details__content__list__item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
  )
}
