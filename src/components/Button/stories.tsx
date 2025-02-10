import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    size: 'small'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: 'Buy now'
};
