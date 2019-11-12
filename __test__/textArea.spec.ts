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

  it('Should be able to receive a number of rows, by default will be 3, example: default', () => {
    const container = document.body;
    render(TextArea);
    const textAreaComponent = container.querySelector('.textArea');
    expect(textAreaComponent).toHaveAttribute('rows', '3');
  });

  it('It should be able to receive a number of lines, by default it will be 3, for example: receiving a line number', () => {
    const container = document.body;
    render(TextArea, {
      props: {
        rows: '5'
      },
    });
    const textAreaComponent = container.querySelector('.textArea');
    expect(textAreaComponent).toHaveAttribute('rows', '5');
  });

  it('entering text in the label property', () => {
    const { getByText } = render(TextArea, {
        props: { labelText: 'Sample'
        }
    }); 
    const textAreaComponent = getByText('Sample');
    expect(textAreaComponent).toHaveTextContent('Sample');    
  });

  afterEach(() => {
    cleanup();
  });
});
