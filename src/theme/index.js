import React, { useMemo } from 'react';
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import 'asset/font/EuclidCircularB/stylesheet.css';

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
};

// const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
//   (accumulator, size) => {
//     ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
//       @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
//         ${css(a, b, c)}
//       }
//     `
//     return accumulator
//   },
//   {}
// ) as any

const accent = '#f90000';

const white = '#FFFFFF';
const black = '#000000';
const grey = '#ECECEC';

export function colors(darkMode) {
  return {
    // define primary colors
    primary1: '#FED851',
    primary2: '#7858F6',
    primary3: '#E9885F',
    primary4: '#05003E',

    //define shades
    shade1: '#EDC742',
    shade2: '#674ADD',
    shade3: '#CB6D44',
    shade4: '#FFFCF1',
    shade5: '#F4F2FE',
    shade6: '#FDF6F2',

    //define neutrals
    white,
    black,
    grey,
  };
}

export function theme(darkMode) {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    // mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,

    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export default function ThemeProvider({ children }) {
  const darkMode = false;

  const themeObject = useMemo(() => theme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

export const FixedGlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Euclid Circular B';
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  button {
    border: none;
    :hover, :focus{
      outline: none;
    }
  }

  h4{
    font-family: 'Euclid Circular B';
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;    
  }
  
  *{
    box-sizing: border-box;
  }
`;

export const ThemedGlobalStyle = createGlobalStyle`
body {
    display:block;
}
`;
