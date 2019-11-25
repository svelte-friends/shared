import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Collapse from '../collapse.svelte';

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

  afterEach(() => {
    cleanup();
  });
});
