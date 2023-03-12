const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCRlyximj5yhVIizSe3AgP7gRlll0fo-v_g&usqp=CAU"
          alt="logo"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Logo />
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
