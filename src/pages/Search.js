import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Search() {
  const CLIENT_ID = "2df711edf9454f86b0f5fa42ecca3c89";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"; // 엔드포인트
  const RESPONSE_TYPE = "token"; // 토큰이 될 응답유형도 필요하다

  const [token, setToken] = useState(""); // 스트링 유형의 토큰 변수를 만들어준다.
  const [searchKey, setSearchKey] = useState(""); // 아티스트를 서치할 상태 변수 만들기
  const [artists, setArtists] = useState([]); // 아티스트를 받아올 상태 변수 선언, 빈 배열로 설정해준다

  useEffect(() => {
    const hash = window.location.hash; // url에서 가져온 해쉬를 저장할 변수 선언
    let token = window.localStorage.getItem("token"); // 우리는 해시가 있을 때만 이 작업을 수행하고 싶고, 토큰이 없는 경우 로컬 스토리지에 토큰을 저장할 것이므로 이 항목에 getItem을 저장할 수 있다.

    // 토큰이 없고 hash가 set돼있을 때, hash로 부터 토큰을 얻으려면 초반부에 # 등을 지워야하는 몇 가지 작업을 수행해야한다. 그래서 문자열을 split분할하고 등호 아래의 토큰을 분할한다.
    if (!token && hash) {
      // 인덱스 1 하위의 문자열을 가지고 &
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token")) // access_token으로 시작하는 요소를 찾으라고 말한 것이다.
        .split("=")[1]; // 이제 우리는 키와 값의 쌍으로 이루어진 액세스 토큰을 얻고 그것을 다시 분할 하고

      window.location.hash = ""; // 해쉬를 다시 빈 문자열로 설정하는 것을 추가해준다.
      window.localStorage.setItem("token", token); // 로컬스토리지에 token을 저장한다.
    }

    setToken(token); // setToken에도 token을 추가해준다.
  }, []); // 앱을 열 때마다 호출 되도록, deps에 빈배열로 useEffect 사용

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // pass also event(it means "e")
  // 내부 이벤트를 지나서 함수를 생성할 것이다. http 리퀘스트를 생성할 것. 우리가 얻는 responce를 분해해보자. 데이터가 있다고 가정해보자
  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      // 몇가지 구성을추가해야한다.
      headers: {
        Authorization: `Bearer ${token}`,
      }, // 가장 먼저 전달해야 하는 것은 스포티파이에 대한 모든 요청을 수행할 수 있는 권한이 있는 헤더이다.
      params: {
        q: searchKey,
        type: "artist",
        // 아티스트를 검색하고 있기 때문에 먼저 검색 키가 될 쿼리, 아티스트가 될 유형을 쿼리하는 매개변수를 전달한다.
      },
    });
    console.log(data); // 콘솔에 서치함수로 불러온 아티스트 데이터를 보여주도록 => 추천 순위 알고리즘을 알 순 없지만 대략적으로 파악할 수 있었다.
    setArtists(data.artists.items); // setArtist 함수를 호출하고 데이터.아티스트 항목에 있는 모든 항목을 설정한다.
  };

  const renderArtists = () => {
    // 각 아티스트에 대해 아티스트 맵함수를 반환한다.
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"10%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    )); // 우리는 div를 호출된 키로 반환하여 아티스트.id로 설정할 것이다.
  };

  const StyledTitle = styled.h1`
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 20px;
  `;
  const StyledSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 50px;
  `;

  const StyledLogin = styled.a`
    a:visited {
      color: none;
      text-decoration: none;
    }
    a:link {
      text-decoration: none;
    }
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    max-width: 310px;
    margin: 10px 0 0;
    padding: 10px 22px;
    border-radius: 50px;
    text-decoration: none;
    color: white;
    text-align: center;
    background-color: #ab4d33;
  `;

  const StyledLoginPlz = styled.h2`
    font-size: 30px;
    margin-top: 40px;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <StyledTitle>새로운 음악을 찾는 즐거움</StyledTitle>
        <StyledSubTitle>디깅은 저희에게 맡겨보세요</StyledSubTitle>
        {!token ? (
          <StyledLogin
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Spotify 계정으로 로그인
          </StyledLogin>
        ) : (
          <button onClick={logout}>Logout</button> // 로그아웃 버튼 추가
        )}

        {token ? (
          // 이 form을 우리가 제출할 때 we perform SearchArtist 할 것이다.
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <StyledLoginPlz>
            로그인 전에는 서비스 사용이 어렵습니다&nbsp;😭
          </StyledLoginPlz>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default Search;
