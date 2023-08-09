export const Navbar = () => {
  return (
    <nav className="header__nav">
      <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/fashion">Fashion</a></li>
        <li><a href="/favorites">Favorites</a></li>
        <li><a href="/lifestyle">Lifestyle</a></li>
        <li>
          <button className="header_nav-btn">
            <p>Sign</p>
            <p>Up</p> 
          </button>
        </li>
      </ul>
    </nav>
  );
};
