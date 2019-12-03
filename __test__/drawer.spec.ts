import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Drawer from '../drawer.svelte';

describe('Drawer Test Suite', () => {
  it('By default, drawer does not shown', () => {
    const { container } = render(Drawer);
    const drawer = container.querySelector('.drawer');
    expect(drawer).not.toBeInTheDocument();
  });

  it('If the drawer is shown, clicking outside dispatch a "close" event', async () => {
    const handleClose = jest.fn();
    const { container, component } = render(Drawer, {
      props: {
        show: true,
      },
    });
    component.$on('close', handleClose);
    const drawer = container.querySelector('.drawer');
    expect(drawer).toBeInTheDocument();
    await fireEvent.click(drawer.children[1]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    cleanup();
  });
});
