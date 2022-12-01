import "../css/Header.css";
import logo from "../images/logo.JPG";

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="navItem">
          <img src={logo} height="60px" width="160px" alt="로고" />
        </div>
        <div className="navItem">
          <div className="navList">Artist</div>
          <div className="navList">Album</div>
          <div className="navList">Lylics</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
