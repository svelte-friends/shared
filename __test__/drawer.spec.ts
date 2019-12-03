import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Drawer from '../drawer.svelte';

describe('Drawer Test Suite', () => {
  it('By default, drawer does not shown', () => {
    const container = document.body;
    render(Drawer);
    const drawer = container.querySelector('.drawer');
    expect(drawer).not.toBeInTheDocument();
  });

  it('If the drawer is shown, clicking outside should disappear', async () => {
    const container = document.body;
    render(Drawer, {
      props: {
        show: true,
      },
    });
    const drawer = container.querySelector('.drawer');
    expect(drawer).toBeInTheDocument();
    await fireEvent.click(drawer.children[1]);
    expect(drawer).not.toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
