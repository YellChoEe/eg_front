import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  body{
    letter-spacing: -0.025em;
    overflow-x: hidden;
    color: rgb(29, 29, 31);
    background-color: white;
  }
  html, body, #__next{
    width: 100%;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    font: inherit;
    box-shadow: none;

    &:focus, &:active {
      outline: none;
    }
  }
`;

export default GlobalStyles;
