export const Navbar = () => {
  return (
    <nav className="header__nav">
      <ul>
        <li><a href="/catalog">Каталог</a></li>
        <li><a href="/fashion">Мода</a></li>
        <li><a href="/favorites">Избранное</a></li>
        <li><a href="/lifestyle">Стиль жизни</a></li>
        <li>
          <button className="header_nav-btn">
            <p>знак</p>
            <p>вверх</p> 
          </button>
        </li>
      </ul>
    </nav>
  );
};
