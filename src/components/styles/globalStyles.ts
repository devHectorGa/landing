import { createGlobalStyle } from 'styled-components';

export const theme = {
  palette: {
    primary: '#fc01ff',
    accent: '#66f7db',
  },
  font: {
    family: `'Lato', sans-serif`,
    familyTitle: `'Oswald', sans-serif`,
    sizeSmallScreen: `calc(2vmin + 1vmax)`,
    sizeSmallMediumScreen: `calc(1.5vmin + 1vmax)`,
    sizeMediumScreen: `calc(1vmin + 1vmax)`,
    sizeBigScreen: `calc(1vmin + 1vmax)`,
  },
  breakpoint: {
    small: '425px',
    medium: '768px',
    large: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {    
    --palette-primary: ${theme.palette.primary}
    --palette-accent: ${theme.palette.accent}
  }
  html,body {
    all: unset;    
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizeSmallScreen};
  }  
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${theme.breakpoint.small}) {
    html,body {
      font-size: ${theme.font.sizeSmallMediumScreen};
    }
  }
  @media screen and (min-width: ${theme.breakpoint.medium}) {
    html,body {
      font-size: ${theme.font.sizeMediumScreen};
    }
  }
  @media screen and (min-width: ${theme.breakpoint.large}) {
    html, body {
      font-size: ${theme.font.sizeBigScreen};
    }
  }
`;
