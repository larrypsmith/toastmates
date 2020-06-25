import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';
import fonts from '../fonts/allFonts';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: Roboto;
    src: url(${fonts.black});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.blackItalic});
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.bold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.boldItalic});
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.italic});
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.light});
    font-weight: 300;
    ont-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.lightItalic});
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.medium});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${fonts.mediumItalic});
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.regular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.thin});
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fonts.thinItalic});
    font-weight: 100;
    font-style: italic;
  }
`;

export default GlobalStyle;