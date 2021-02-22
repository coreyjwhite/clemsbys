import styled from "styled-components";
import c from "styles/color";
import m from "styles/measures";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: ${m.devMd}) {
    flex-flow: column nowrap;
  }
`;

export default function Row(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
