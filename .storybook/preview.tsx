import type { Preview } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/styles/global'; // Importando o componente que você quer retornar
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
