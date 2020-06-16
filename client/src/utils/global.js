import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

#root {
  height: 100vh;
}

* {
  box-sizing: border-box;
}
`;
