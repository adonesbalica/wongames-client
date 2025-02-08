import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    color: 'white',
    lineLeft: false,
    lineBottom: false
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = {}

Default.args = {
  children: 'Most Populars'
}
