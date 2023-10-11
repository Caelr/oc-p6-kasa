import { useState } from 'react'

export default function MenuCollapse({ title, description, list }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="menu">
      <p onClick={() => setIsOpen(prev => !prev)} className="menu__title">
        {title}
      </p>
      <div className={isOpen ? 'menu__content is-open' : 'menu__content'}>
        {description && (
          <p className="menu__content__description">{description}</p>
        )}
      </div>
    </div>
  )
}
