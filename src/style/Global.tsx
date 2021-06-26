import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyWebFont';
    src: url('Font.ttf') format('truetype');
  }

  * {
    font-family: 'MyWebFont';
  }
  body {
    background-image: url('/images/egg/farm1.gif');
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: auto;
    

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
