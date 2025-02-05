import type { Preview } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/styles/global' // Importando o componente que você quer retornar

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
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <GlobalStyles />
        <Story />
      </div>
    )
  ]
}

export default preview
