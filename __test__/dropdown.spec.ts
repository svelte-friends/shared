import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/svelte';
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

  afterEach(() => {
    cleanup();
  });
});
