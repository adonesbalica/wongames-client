import { screen } from '@testing-library/react';
import * as S from './styles';
import { renderWithTheme } from '@/utils/tests/helpers';

import Highlight from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/read-dead-img.jpeg',
  floatImage: '/float-image.png'
};

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render float image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
