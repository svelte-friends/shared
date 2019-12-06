import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import TabHeader from '../tabHeader.svelte';

describe('receive items tab component', () => {
  it('Receive items', () => {

    let items = [
      { label: 'TAB 1' },
      { label: 'TAB 2' }
    ]
    const { getByText } = render(TabHeader, {
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
    const  {getByText} = render(TabHeader, {
      props: {
        items: items,
        active: 2
      },
    })

    const tabsActive = getByText('TAB 2')
    expect(tabsActive.parentElement).toHaveClass('active')

  });

  afterEach(() => {
    cleanup();
  });
});
