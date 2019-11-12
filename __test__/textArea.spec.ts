import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import TextArea from '../textArea.svelte';

describe('textArea Test Suite', () => {
  it('Must be able to receive placeholder', () => {
    const { getByPlaceholderText } = render(TextArea, {
      props: {
        placeholder: 'Teste'
      }
    });
    const textAreaComponent = getByPlaceholderText('Teste');
    expect(textAreaComponent).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
