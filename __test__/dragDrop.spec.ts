import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import DragDrop from '../dragDrop.svelte';

describe('dragDrop Test Suite', () => {
  it('Checking if you received the 4 elements', () => {
    let items = [
      { label: 'Intimidade' },
      { label: 'Tempo' },
      { label: 'Zero' },
      { label: 'Old town road' },
    ];
    const { container } = render(DragDrop, {
      props: {
        items
      },
    });
    const dragElement = container.querySelector('.dragAndDrop');
    expect(dragElement.childNodes).toHaveLength(4);
  });
  afterEach(() => {
    cleanup();
  });
});
