import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Navigation } from './navigation'
import { Slide } from './slide/Slide'

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      <Slide/>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);