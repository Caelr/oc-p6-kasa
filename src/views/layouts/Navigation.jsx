import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Kasa</Link>
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <Link className="navigation__list__link" to="/">
            Accueil
          </Link>
        </li>
        <li className="navigation__list__item">
          <Link className="navigation__list__link" to="a-propos">
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
