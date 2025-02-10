import { Meta, StoryObj } from '@storybook/react';
import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    color: 'white',
    lineLeft: false,
    lineBottom: false,
    size: 'medium',
    lineColor: 'primary'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: 'Most Populars'
};
