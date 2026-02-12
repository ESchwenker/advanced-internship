interface Props {
  openLogin: () => void
}

export default function Navbar({ openLogin }: Props) {
  return (
    <nav className="nav">
      <div className="nav__wrapper">

        <figure className="nav__img--mask">
          <img className="nav__img" src="/logo.png" />
        </figure>

        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={openLogin}>
            Login
          </li>
        </ul>

      </div>
    </nav>
  )
}