import styled from "styled-components";
import m from "styles/measures";
import Row from "components/Row";
import Section from "components/Section";

const PageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const StyledImg = styled.img`
  width: ${m.col12};
  max-height: ${m.sp14};
`;

export default function Home() {
  return (
    <PageDiv>
      <h1>CLEMSBY&#39;s.</h1>
      <h4>New World Cuisine</h4>
      <StyledImg style={{ margin: `${m.sp10} 0` }} src="/maize.svg" />
      <p>
        <i>Mr. Jason Wrightly</i>, PROPRIETOR. <br />
        148 JACKSON St., KNOXVILLE, TENN. <br />
        <i>Anno</i> M·M·X·X·I
      </p>
      <Row>
        <Section>
          <h2>POULTRY.</h2>
          <StyledImg style={{ margin: `${m.sp12} 0` }} src="/poultry.svg" />
        </Section>
        <Section>
          <h2>FISH &#38;c.</h2>
          <StyledImg style={{ margin: `${m.sp12} 0` }} src="/fish.svg" />
        </Section>
      </Row>
    </PageDiv>
  );
}
