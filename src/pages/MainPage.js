import "../css/main.css";
import Search from "./Search";
import backgroundVideo from "../images/music.mp4";
import Header from "./Header";

function MainPage() {
  return (
    <>
      <Header />
      <div className="main">
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="container">
          <Search />
        </div>
      </div>
    </>
  );
}

export default MainPage;
