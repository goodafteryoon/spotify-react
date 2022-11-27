import React from "react";
import styled from "styled-components";

const StyledMainSection = styled.div`
  flex-grow: 1; /* 헤더와 푸터 사이에 메인 꽉 차도록 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
`;

function MainSection() {
  return <StyledMainSection>메인</StyledMainSection>;
}

export default MainSection;
