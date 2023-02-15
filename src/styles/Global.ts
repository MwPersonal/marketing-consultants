import { darken } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/quotes
  subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    font-family: ${
      montserrat.style.fontFamily
    }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html,
  body {
    line-height: 1.6;
    font-size: 18px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.selection};
  }
  
  input,
  button,
  textarea {
    outline: 0;
  }

  img {
    user-select: none;
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

export const DefaultTitle = styled.h1`
  font-size: 1.75rem;

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.45rem;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }

  @media (max-width: 400px) {
    font-size: 1.15rem;
  }
`;

export const DefaultSubTitle = styled.h2`
  font-size: 1.35rem;

  @media (max-width: 750px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1.15rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const DefaultDescription = styled.p`
  font-size: 1.125rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
