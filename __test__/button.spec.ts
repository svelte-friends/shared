import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Button from '../button.svelte';

describe('Button Test Suite', () => {
  afterEach(cleanup);

  it('Render a default button', () => {
    const { container } = render(Button);
    const button = container.querySelector('.button');
    expect(button).toBeInTheDocument();
  });

  it('Render a big button', () => {
    const { container } = render(Button, {
      props: {
        big: true,
      }
    });
    const button = container.querySelector('.button');
    expect(button).toHaveClass('big');
  });

  it('Render a small button', () => {
    const { container } = render(Button, {
      props: {
        small: true,
      }
    });
    const button = container.querySelector('.small');
    expect(button).toHaveClass('small');
  });

  it('Render a pill button', () => {
    const { container } = render(Button, {
      props: {
        pill: true,
      }
    });
    const button = container.querySelector('.pill');
    expect(button).toHaveClass('pill');
  });

  it('Render a outline button', () => {
    const { container } = render(Button, {
      props: {
        outline: true,
      }
    });
    const button = container.querySelector('.outline');
    expect(button).toHaveClass('outline');
  });

  it('Render a full button', () => {
    const { container } = render(Button, {
      props: {
        full: true,
      }
    });
    const button = container.querySelector('.full');
    expect(button).toHaveClass('full');
  });

  it('Disabled button', () => {
    const { container } = render(Button, {
      props: {
        disabled: true,
      }
    });
    const button = container.querySelector('.button');
    expect(button).toHaveAttribute('disabled');
  });

  it('Trigger "click" event when button is clicked', async () => {
    const handleClick = jest.fn();
    const { container, component } = render(Button);
    component.$on('click', handleClick);
    const button = container.querySelector('.button');
    await fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
