import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__description">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/' className="error__link active">Retourner sur la page d’accueil</Link>
    </main>
  )
}
