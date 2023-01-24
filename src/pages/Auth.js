// Before Login ? Render This Auth Component
import styled from "styled-components";

const StyledLoginBtn = styled.a`
  a:visited {
    color: none;
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  max-width: 310px;
  margin: 10px 0 0;
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  text-align: center;
  background-color: #ab4d33;
`;

function Auth() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT; // 엔드포인트
  const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE; // 토큰이 될 응답유형도 필요하다

  return (
    <>
      <StyledLoginBtn
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Spotify 계정으로 로그인
      </StyledLoginBtn>
    </>
  );
}

export default Auth;
