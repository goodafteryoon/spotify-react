import React from "react";
import "../css/main.css";
import Search from "./Search";
import backgroundVideo from "../images/music.mp4";
import logo from "../images/logo.JPG";
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
