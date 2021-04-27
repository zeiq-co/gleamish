import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#e9bd16';
const lightShades = '##f7f8f9;';
const darkAccent = '#000000';
const darkShades = '#333333';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#e9bd16',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#f0f4f7',
  backgroundInputColor: '#b5b5b5',
  backgroundInputColorDark: darkShades,
  fontSize: 17, // 'default text-size"'
  fontSizeSmall: 15,
  fontSizeMedium: 17, // 'Default font size'
  fontSizeLarge: 24, // 'Use className="is-size-3"'
  fontSizeExtraLarge: 40, // 'Use className="is-size-2"'
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#ffffff',
  textColorDark: '#585858',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Montserrat', sans-serif",
  secondaryFontFamily: "'Montserrat', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.7px !important;
    font-size: 17px;
    .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
  }
  .button {
    font-family: ${theme.secondaryFontFamily};
  }
  h1 {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor} !important;
    font-family: ${theme.primaryFontFamily} !important;
  }
  .subtitle {
    color: ${lighten(0.06, theme.textColor)} !important;
    line-height: 1.5;
  }
  .button.is-secondary {
    box-shadow: none;
    border-radius: 0;
    background-color: ${theme.lightAccent};
    border-color: transparent;
    transition: all 0.5s ease-out;
    :hover {
      background-color: ${darken(0.06, theme.lightAccent)};
      border-color:  ${darken(0.06, theme.lightAccent)};
      border-width: 0.5px;
    }
    :focus {
      box-shadow: none !important;
      border-color: transparent !important;
    }
  }

  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  .help.is-danger {
    color:${theme.dangerColor} !important;
  }
  .is-family-primary {
    font-family: ${theme.primaryFontFamily} !important;
  }
  .line-height{
    line-height:26px !important;
  }
  .is-size-6 {
    font-size: 17px !important;
  }
  .markdown-container {
    h1 {
      font-size: 40px;
      margin-top: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${theme.darkAccent} !important;
      line-height: 48px;
    }
    strong {
      color: ${theme.darkAccent} !important;
      font-weight:600 !important;
    }
      h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: ${theme.darkAccent};
      font-family: ${theme.primaryFontFamily} !important;
    }
    h2 {
      font-size: 24px;
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    h3 {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    p {
      margin-block-start: 0em;
      margin-block-end: 0.7em;
    }
    ol, ul {
      list-style: disc !important;
    }
    a {
      font-family: ${theme.primaryFontFamily} !important;
    }
  }
`;

export default GlobalStyle;
