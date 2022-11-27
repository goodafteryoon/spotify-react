import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: skyblue;
  justify-content: center; /*네비바 가운데로*/
  z-index: 10; /* 헤더가 최상위로 보이도록 */
  border-bottom: 1px solid #e1e2e3;
`;

function Header() {
  return <StyledHeader>헤더</StyledHeader>;
}

export default Header;
