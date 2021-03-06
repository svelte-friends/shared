import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Input from '../input.svelte';

describe('Input Teste Suite', () => {
  it('Should receive a placeholder', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter a name',
      },
    });
    const input = getByPlaceholderText('Enter a name');
    expect(input).toBeInTheDocument();
  });

  it('Input have to be type "text" by default', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter a name',
      },
    });
    const input = getByPlaceholderText('Enter a name');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('Input can be as type number', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter a number',
        type: 'number',
      },
    });
    const input = getByPlaceholderText('Enter a number');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('Input can be as type password', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter your password',
        type: 'password',
      },
    });
    const input = getByPlaceholderText('Enter your password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('If Input receive type as "checkbox", change the type to "text"', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter a name',
        type: 'checkbox',
      },
    });
    const input = getByPlaceholderText('Enter a name');
    expect(input).not.toHaveAttribute('type', 'checkbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('If Input receive type as "radio", change the type to "text"', () => {
    const { getByPlaceholderText } = render(Input, {
      props: {
        placeholder: 'Enter a name',
        type: 'checkbox',
      },
    });
    const input = getByPlaceholderText('Enter a name');
    expect(input).not.toHaveAttribute('type', 'radio');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('Input should receive label property', () => {
    const { getByText } = render(Input, {
      props: {
        label: 'Enter your address',
      },
    });
    const label = getByText('Enter your address');
    expect(label).toBeInTheDocument();
  });

  it('Input type "password" should have a button to show/hide characteres', async () => {
    const { getByPlaceholderText, container } = render(Input, {
      props: {
        placeholder: 'Password',
        type: 'password',
      }
    });
    const input = getByPlaceholderText('Password');
    const eyeButton = container.querySelector('.input-password-eye');
    expect(input).toHaveAttribute('type', 'password');
    await fireEvent.click(eyeButton);
    expect(input).toHaveAttribute('type', 'text');
  });

  afterEach(() => {
    cleanup();
  });
});
