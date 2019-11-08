import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import DotLabel from '../dotLabel.svelte';

describe('DotLabel Test Suite', () => {
  it('It should be possible to receive a color for the text:colorText', () => {
    const container = document.body;
    render(DotLabel, {
      props: { colorText: 'blue' },
    });
    const dotLabelElement = container.querySelector('.textLabel');
    expect(dotLabelElement).toHaveStyle('color:blue');
  });

  it('It must be possible to receive a color for the Badge: colorBadge', () => {
    const container = document.body;
    render(DotLabel, {
      props: { colorBadge: 'blue' },
    });
    const dotLabelElement = container.querySelector('.dotLabel');
    expect(dotLabelElement).toHaveStyle('background-color:blue');
  });

  it('By default, the color of the badge will be: purple', () => {
    const container = document.body;
    render(DotLabel);
    const bgColor = container.querySelector('.dotLabel');
    expect(bgColor).toHaveStyle('background-color: #624695');
  });

  it('Must be able to receive a Badge Number', () => {
    const { getByText } = render(DotLabel, { props: { number: '1' } });
    const dotLabelComponent = getByText('1');
    expect(dotLabelComponent).toBeInTheDocument();
  });

  it('It should be possible to receive a color for the Badge number: textBadge', () => {
    const { getByText } = render(DotLabel, {
      props: {
        textBadgeColor: 'blue',
        number: '10',
      },
    });
    const dotlabelElement = getByText('10');
    expect(dotlabelElement).toHaveStyle('color:blue');
  });

  it('It should be possible to choose size type, default and small: example: small', () => {
    const container = document.body;
    render(DotLabel, {
      props: { small: true },
    });
    const dotLabelSmall = container.querySelector('.small');
    expect(dotLabelSmall).toHaveClass('small');
  });

  it('It should be possible to choose size type, default and small: example: default', () => {
    const container = document.body;
    render(DotLabel);
    const dotLabelDefault = container.querySelector('.dotLabel');
    expect(dotLabelDefault).not.toHaveClass('small');
  });

  it('In the case the number be larger than 99, the text should be replaced with 99+', () => {
    const { getByText } = render(DotLabel, {
      props: { number: '101' },
    });
    const textSpan = getByText('99+');
    expect(textSpan).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
