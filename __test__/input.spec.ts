import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
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
});
