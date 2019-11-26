import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/svelte';
import { getByText } from '@testing-library/dom';
import Dropdown from '../dropdown.svelte';

describe('Dropdown Test Suite', () => {
  it('Should receive a "label" property', () => {
    const { getByText } = render(Dropdown, {
      props: {
        label: 'Open a dropdown',
      }
    });

    const label = getByText('Open a dropdown');
    expect(label).toBeInTheDocument();
  });

  it('Should receive array of strings to items', () => {
    const list = ['Blue', 'Green', 'Yellow'];

    const container = document.body;
    render(Dropdown, {
      props: {
        list
      }
    });

    const blue = getByText(container, 'Blue');
    expect(blue).toBeInTheDocument();
    const green = getByText(container, 'Green');
    expect(green).toBeInTheDocument();
    const yellow = getByText(container, 'Yellow');
    expect(yellow).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
