import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --white: #FFFFFF;
  --black: #080d0f;
  --blue: #3d647b;
  --lightBlue: #FFFFFF10;
  --brightBlue: #12A8FF70;
  --brown: #7b543d;
  --lightBrown: #7b543d80;
  --yellow: #f9d05e;
  --red: #843200;
  --grey: #5c5d5e;
  --lightGrey: #c4c4c470;
  --clear: #00000000;

  --h_black: #01142A;
  --h_grey: #5e6c7c;
}
html {
  font-size: 10px;
  color: var(--white);
  box-sizing: border-box;
  letter-spacing: 2px;
  overflow: hidden;
  font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow: hidden;
  text-rendering: optimizeLegibility;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}
h1,
h2,
h3,
h4 {
}
h1 {
 font-size: 3rem;
 line-height: 4rem;
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
