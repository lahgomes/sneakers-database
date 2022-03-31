import { css } from '@emotion/react'

const createGlobalStyles = () => css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 16px;
    line-height: 1;
    font-family: Poppins, sans-serif;
  }

  html,
  body,
  #__next {
    min-height: 100vh;
  }
`

export default createGlobalStyles
