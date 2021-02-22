import styled from "styled-components";
import c from "styles/color";
import m from "styles/measures";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: ${m.sp7};
  height: 100vh;
  scroll-snap-align: start;
  width: ${m.col12};
  @media (min-width: ${m.devMd}) {
    display: flex;
    width: ${m.col4};
  }
`;

export default function Section(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
