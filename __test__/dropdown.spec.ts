import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/svelte';
import { getByText, fireEvent } from '@testing-library/dom';
import Dropdown from '../dropdown.svelte';

describe('Dropdown Test Suite', () => {
  const list = ['Debug', 'Explorer', 'Extensions'];
  it('Should receive a "label" property', () => {
    const { getByText } = render(Dropdown, {
      props: {
        label: 'View',
      }
    });

    const label = getByText('View');
    expect(label).toBeInTheDocument();
  });

  it('Should receive array of strings to items', () => {
    const container = document.body;
    render(Dropdown, {
      props: {
        list
      }
    });

    const debug = getByText(container, 'Debug');
    expect(debug).toBeInTheDocument();
    const explorer = getByText(container, 'Explorer');
    expect(explorer).toBeInTheDocument();
    const extensions = getByText(container, 'Extensions');
    expect(extensions).toBeInTheDocument();
  });

  it('Should dropdown expand when button is clicked', async () => {
    const container = document.body;
    render(Dropdown, {
      props: {
        label: 'View',
        list,
      }
    });

    const dropdown = container.querySelector('.dropdown');
    await fireEvent.click(dropdown);
    expect(dropdown).toHaveClass('show');
  });

  afterEach(() => {
    cleanup();
  });
});
