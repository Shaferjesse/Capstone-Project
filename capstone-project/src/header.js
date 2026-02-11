
import Logo from "./icons_assets/Logo.svg";

function Header() {
  return (
    <header className="header">
      <h1>Little Lemon</h1>
      <img src={Logo} alt="Little Lemon logo" />
    </header>
  );
}

export default Header;