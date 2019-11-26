import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Tabs from '../tabs.svelte';

describe('receive items tab component', () => {
  it('Receive items', () => {

    let items = [
      { label: 'TAB 1' },
      { label: 'TAB 2' }
    ]
    const { getByText } = render(Tabs, {
      props: {
        items: items
      },
    })
    const tabsItem = getByText('TAB 2')
    expect(tabsItem).toBeDefined()

  });

  it('Active tabs', () => {
    let items = [
      { label: 'TAB 1' },
      { label: 'TAB 2' }
    ]
    const { getByText } = render(Tabs, {
      props: {
        items: items,
        active: 2
      },
    })

    const tabActive = getByText('TAB 2');
    expect(tabActive).toHaveClass('active');

  });

  afterEach(() => {
    cleanup();
  });
});
