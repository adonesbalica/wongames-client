import { Meta, StoryFn } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    },
    fullWidth: {
      type: 'boolean'
    }
  }
} as Meta;

export const Default: StoryFn = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy Now',
  fullWidth: false
};

export const WithIcon: StoryFn = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'Buy Now',
  fullWidth: false,
  icon: <AddShoppingCart />
};

export const AsLink: StoryFn = (args) => <Button {...args} />;

AsLink.args = {
  size: 'large',
  children: 'As Link',
  as: 'a',
  href: '/link'
};
