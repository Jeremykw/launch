import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --blue: #3d647b;
  --brown: #7b543d;
  --lightBrown: #7b543d80;
  --yellow: #f9d05e;
  --red: #843200;
  --black: #080d0f;
  --white: #FFFFFF;
  --lightBlue: #FFFFFF10;
  --lightGrey: #c4c4c470;
  --brightBlue: #12A8FF70;
  --clear: #00000000;
}
html {
  font-size: 10px;
  font-family: Geneva;
  color: var(--white);
  box-sizing: border-box;
  letter-spacing: 2px;
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

h1 {
 font-size: 3rem;
}
h2 {
  font-size: 2rem;

}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
`;

export default GlobalStyles;
