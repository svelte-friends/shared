import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Collapse from '../collapse.svelte';
import { assign } from 'svelte/internal';

describe('Collapse Test Suite', () => {
  it('It must be possible to receive a label', () => {

    const { getByText } = render(Collapse, {
      props: {
        label: 'Open a collapse',
      }
    });
    const label = getByText('Open a collapse');
    expect(label).toBeInTheDocument();
  });

  it('It should be possible to expand', async () => {
    const container = document.body;
    render(Collapse, {
      props: { 
        label: 'View',
      },
    });
    const collapse = container.querySelector('.collapse-button');
    await fireEvent.click(collapse);
    expect(collapse).toHaveClass('show');
  });

  

  afterEach(() => {
    cleanup();
  });
});
