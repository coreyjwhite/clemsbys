import { createGlobalStyle } from "styled-components";
import c from "styles/color";
import m from "styles/measures";

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: "Averia Serif Libre";
  background-color: ${c.primary9};
}

a {
  color: inherit;
  text-decoration: none;
}

p, h1, h2, h3, h4, h5, h6, td {
  color: ${c.primary5};
  margin: 0;
  text-align: center;
}

h1 {
  font-size: ${m.sp10};
  @media (min-width: ${m.devMd}) {
    font-size: ${m.sp12};
  }
}

h2 {
  font-size: ${m.sp8};
  @media (min-width: ${m.devMd}) {
    font-size: ${m.sp10};
  }
}

h4 {
  font-size: ${m.sp8};
  font-style: italic;
  margin: ${m.sp8} 0;
}

* {
  box-sizing: border-box;
  image-rendering: -webkit-optimize-contrast;
}
`;

export default GlobalStyle;
