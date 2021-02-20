import Head from "next/head";
import styled from "styled-components";
import c from "styles/color";
import m from "styles/measures";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: ${c.primary9};
  padding: ${m.sp7};
`;

const StyledH1 = styled.h1`
  font-size: ${m.sp10};
  text-align: center;
  margin: 0;
  @media (min-width: ${m.devMd}) {
    font-size: ${m.sp12};
  }
`;

const StyledImg = styled.img`
  width: ${m.col12};
  @media (min-width: ${m.devMd}) {
    width: ${m.col5};
  }
`;

const StyledP = styled.p`
  text-align: center;
`;

export default function Home() {
  return (
    <StyledDiv>
      <StyledH1>CLEMSBY&#39;s.</StyledH1>
      <StyledImg style={{ margin: `${m.sp12} 0` }} src="/maize.svg" />
      <StyledP>
        <i>Mr. Jason Wrightly</i>, PROPRIETOR. <br />
        148 JACKSON St., KNOXVILLE, TENN. <br />
        <i>Anno</i> M·M·X·X·I
      </StyledP>
    </StyledDiv>
  );
}
