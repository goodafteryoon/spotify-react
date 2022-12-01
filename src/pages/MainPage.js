import "../css/main.css";
import Search from "./Search";
import backgroundVideo from "../images/music.mp4";
import Header from "./Header";
// const StyledMainSection = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: yellowgreen;
// `;

// const StyledFooter = styled.div`
//   text-align: center;
//   height: 245px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   border-top: 1px solid #c6c8ca;
// `;

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
