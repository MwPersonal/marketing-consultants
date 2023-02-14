import { darken } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html,
  body {
    line-height: 1.6;
    font-size: 18px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.selection};
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  input,
  button,
  textarea {
    outline: 0;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.selection};
  }
  ::selection {
    background: ${({ theme }) => theme.selection};
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.selection};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => darken(0.1, theme.orange)};
    border-radius: 5px;
    transition: 0.2s background;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(0.3, theme.orange)};
  }
`;

export const ColumnLayout = styled.div`
  /* display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 100px);
  column-gap: 20px; */
`;
