import { Meta, StoryFn } from '@storybook/react';

import Highlight, { type HighLightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.png'
  }
} as Meta;

export const Default: StoryFn<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: StoryFn<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  alignment: 'right',
  floatImage: '/img/red-dead-float.png'
};
