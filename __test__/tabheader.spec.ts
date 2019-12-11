import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import TabHeader from '../tabHeader.svelte';

describe('receive items tab component', () => {
  let items = [
    { label: 'TAB 1' },
    { label: 'TAB 2' }
  ]
  it('Receive items', () => {
    const { container } = render(TabHeader, {
      props: {
        items
      },
    });
    const tabs = container.querySelector('.content');
    expect(tabs.children).toHaveLength(2);
  });

  it('Active tabs', () => {
    const  { container } = render(TabHeader, {
      props: {
        items,
        active: 2
      },
    });
    const tabs = container.querySelector('.content');
    expect(tabs.children[1]).toHaveClass('active');
  });


  it('Change active tab', async () => {
    const { container } = render(TabHeader, {
      props: {
        items
      },
    })
    const tabs = container.querySelector('.content');
    await fireEvent.click(tabs.children[1]);
    expect(tabs.children[1]).toHaveClass('active');
  });

  afterEach(() => {
    cleanup();
  });
});
